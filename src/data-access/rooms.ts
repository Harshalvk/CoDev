import { db } from "@/db/index";
import { room } from "@/db/schema";
import { eq } from "drizzle-orm";
import { unstable_noStore } from "next/cache";

const getRooms = async () => {
  unstable_noStore();
  const rooms = await db.query.room.findMany();
  return rooms;
};

const getRoom = async (roomId: string) => {
  unstable_noStore();
  return await db.query.room.findFirst({
    where: eq(room.id, roomId),
  });
};

export { getRooms, getRoom };
