import { db } from "@/db/index";
import { unstable_noStore } from "next/cache";

const getRooms = async () => {
  unstable_noStore();
  const rooms = await db.query.room.findMany();
  return rooms;
};

export { getRooms };