import { db } from "@/db/index";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

const deleteUser = async (userId: string) => {
  await db.delete(users).where(eq(users.id, userId));
};

export default deleteUser;