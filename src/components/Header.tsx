import React from "react";
import { ModeToggle } from "./ModeToggle";
import { auth } from "../../auth";
import UserAccountNav from "./UserAccountNav";
import SignInButton from "./SignIn";

const Header = async () => {
  const session = await auth();
  if (!session?.user) {
    return null;
  }

  return (
    <div className="mt-4 flex items-center justify-between py-4 px-6 border rounded-full mx-auto">
      <div>
        <span className="text-2xl font-bold tracking-tighter">CoDev</span>
      </div>
      <div className="flex gap-2 items-center">
        <ModeToggle />
        <div className="flex items-center">
          {session.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <SignInButton text="SignIn" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
