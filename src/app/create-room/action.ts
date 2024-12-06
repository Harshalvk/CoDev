"use server";

import { db } from "@/db";
import { Room, room } from "@/db/schema";
import { auth } from "../../../auth";
import { revalidatePath } from "next/cache";

export async function createRoomAction(roomData: Omit<Room, "id" | "userId">) {
  const session = await auth();

  if (!session) {
    throw new Error("You must be logged in to create a room.");
  }

  await db.insert(room).values({ ...roomData, userId: session.user.id });

  revalidatePath("/");
}
