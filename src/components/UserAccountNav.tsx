"use client";

import React, { useState } from "react";
import { User } from "next-auth";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LogOut, UserX } from "lucide-react";
import UserAvatar from "./UserAvatar";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import deleteAccountAction from "@/app/action";

type Props = {
  user: Pick<User, "name" | "email" | "image">;
};

const DeleteUserAccountDialog = () => {
  const [open, setOpen] = useState<boolean | null>(true);
  return (
    open && (
      <div className="fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 transition-all">
        <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg">
          <div>
            <h1 className="text-lg font-semibold">
              Are you sure you want to delete your account?
            </h1>
            <p className="text-neutral-400 text-sm">
              This action will permanently delete your account and all its
              associated data. Are you sure you want to proceed?
            </p>
          </div>
          <div>
            <Button
              variant={"ghost"}
              className="mr-2"
              onClick={() => setOpen(!open)}
            >
              Cancle
            </Button>
            <Button>Continue</Button>
          </div>
        </div>
      </div>
    )
  );
};

const UserAccountNav = ({ user }: Props) => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <UserAvatar user={user} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex items-center justify-star gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-zinc-700 dark:text-zinc-400">
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={(e) => {
            e.preventDefault();
            signOut({
              redirectTo: "/",
            }).catch(console.error);
          }}
          className="dark:text-red-500 text-red-500 group cursor-pointer"
        >
          Sign Out{" "}
          <LogOut
            height={16}
            width={16}
            className="group-hover:translate-x-1 transition"
          />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={async () => {
            await deleteAccountAction();
            signOut({ redirectTo: "/" });
          }}
        >
          <UserX />
          Delete Account
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
