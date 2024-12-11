"use server";

import { redirect } from "next/navigation";
import { auth } from "../../auth";
import deleteUser from "@/data-access/users";

const deleteAccountAction = async () => {
  const session = await auth();

  if (!session?.user) {
    throw new Error("You must be logged in to delete your account");
  }

  await deleteUser(session.user.id);
};

export default deleteAccountAction;
