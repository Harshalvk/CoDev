"use server";

import { deleteRoom, getRoom } from "@/data-access/rooms";
import { auth } from "../../../auth";
import { revalidatePath } from "next/cache";

export const deleteUserRoomAction = async (roomId: string) => {
  const session = await auth();

  if (!session?.user) {
    throw new Error("User not authenticated");
  }

  const room = await getRoom(roomId);

  if (room?.userId !== session.user.id) {
    throw new Error("User not authorized");
  }

  await deleteRoom(roomId);

  revalidatePath("/my-rooms");
};