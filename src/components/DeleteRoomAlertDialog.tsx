"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { useState } from "react";
import { deleteUserRoomAction } from "@/app/my-rooms/action";

const Alert = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"ghost"} className="w-fit">
          <X />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this room?{" "}
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action will permanently delete the selected meeting room and
            all its associated data. Are you sure you want to proceed?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancle</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const DeleteRoomAlertDialog = ({ roomId }: { roomId: string }) => {
  const [open, setOpen] = useState<boolean | null>(true);
  return (
    open && (
      <div className="fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 transition-all">
        <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg">
          <div>
            <h1 className="text-lg font-semibold">
              Are you sure you want to delete this room?
            </h1>
            <p className="text-neutral-400 text-sm">
              This action will permanently delete the selected meeting room and
              all its associated data. Are you sure you want to proceed?
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
            <Button onClick={() => deleteUserRoomAction(roomId)}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    )
  );
};
