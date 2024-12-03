import React from "react";
import UserAvatar from "./UserAvatar";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <div className="mt-4 max-w-7xl flex items-center justify-between mx-auto py-4 px-6 border rounded-full">
      <div>
        <span className="text-2xl font-bold tracking-tighter">CoDev</span>
      </div>
      <div className="flex gap-2">
        <UserAvatar />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
