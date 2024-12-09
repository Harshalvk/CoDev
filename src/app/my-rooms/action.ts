"use server";

import { deleteRoom, getRoom } from "@/data-access/rooms";
import { auth } from "../../../auth";
import { revalidatePath, unstable_noStore } from "next/cache";

export const deleteUserRoomAction = async (roomId: string) => {
  const session = await auth();

  if (!session?.user) {
    throw new Error("User not authenticated");
  }

  unstable_noStore();
  const room = await getRoom(roomId);

  if (room?.userId !== session.user.id) {
    throw new Error("User not authorized");
  }

  await deleteRoom(roomId);

  revalidatePath("/my-rooms");
};
