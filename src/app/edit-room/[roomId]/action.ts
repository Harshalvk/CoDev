"use server";

import { Room } from "@/db/schema";
import { auth } from "../../../../auth";
import { revalidatePath } from "next/cache";
import { getRoom, updateRoomData } from "@/data-access/rooms";
import { redirect } from "next/navigation";

export async function updateRoomAction(roomData: Omit<Room, "userId">) {
  const session = await auth();

  if (!session) {
    throw new Error("You must be logged in to create a room.");
  }

  const room = await getRoom(roomData.id);

  if (room?.userId !== session.user.id) {
    throw new Error("User not authorized!");
  }

  await updateRoomData(roomData);

  revalidatePath("/my-rooms");
  revalidatePath(`/edit-rooms/${roomData.id}`);
}
