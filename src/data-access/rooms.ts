import { db } from "@/db/index";
import { room } from "@/db/schema";
import type { Room } from "@/db/schema";
import { eq, ilike } from "drizzle-orm";
import { auth } from "../../auth";
import { redirect } from "next/navigation";

const getRooms = async (search: string | undefined) => {
  const where = search ? ilike(room.tags, `%${search}%`) : undefined;
  const rooms = await db.query.room.findMany({
    where,
  });
  return rooms;
};

const getRoom = async (roomId: string) => {
  return await db.query.room.findFirst({
    where: eq(room.id, roomId),
  });
};

const getMyRooms = async () => {
  const session = await auth();
  if (!session?.user) {
    return redirect("/login");
  }
  return await db.query.room.findMany({
    where: eq(room.userId, session.user.id),
  });
};

const deleteRoom = async (roomId: string) => {
  await db.delete(room).where(eq(room.id, roomId));
};

const updateRoomData = async (roomData: Omit<Room, "userId">) => {
  const updated = await db
    .update(room)
    .set(roomData)
    .where(eq(room.id, roomData.id))
    .returning();
  return updated[0];
};

export { getRooms, getRoom, getMyRooms, deleteRoom, updateRoomData };
