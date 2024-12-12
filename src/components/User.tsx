import React from "react";
import UserAccountNav from "./UserAccountNav";
import SignInButton from "./SignIn";
import { auth } from "../../auth";

const User = async () => {
  const session = await auth()
  return (
    <div className="flex items-center">
      {session?.user ? (
        <UserAccountNav user={session.user} />
      ) : (
        <SignInButton text="SignIn" />
      )}
    </div>
  );
};

export default User;
