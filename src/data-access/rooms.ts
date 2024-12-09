import { db } from "@/db/index";
import { room } from "@/db/schema";
import { eq, ilike } from "drizzle-orm";
import { auth } from "../../auth";

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
    throw new Error("User not authenticated!");
  }
  return await db.query.room.findMany({
    where: eq(room.userId, session.user.id),
  });
};

const deleteRoom = async (roomId: string) => {
  await db.delete(room).where(eq(room.id, roomId));
};

export { getRooms, getRoom, getMyRooms, deleteRoom };
