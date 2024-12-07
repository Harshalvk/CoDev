import { db } from "@/db/index";
import { room } from "@/db/schema";
import { eq, ilike } from "drizzle-orm";
import { unstable_noStore } from "next/cache";

const getRooms = async (search: string | undefined) => {
  unstable_noStore();
  const where = search ? ilike(room.tags, `%${search}%`) : undefined;
  const rooms = await db.query.room.findMany({
    where,
  });
  return rooms;
};

const getRoom = async (roomId: string) => {
  unstable_noStore();
  return await db.query.room.findFirst({
    where: eq(room.id, roomId),
  });
};

export { getRooms, getRoom };
