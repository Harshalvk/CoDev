"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Room } from "@/db/schema";
import { Button } from "./ui/button";
import Link from "next/link";
import { Github, X } from "lucide-react";
import Tags from "@/components/Tags";
import { DeleteRoomAlertDialog } from "./DeleteRoomAlertDialog";

type CardType = "default" | "roomCard";

type Props = {
  room: Room;
  cardType?: CardType;
};

const RoomCard = ({ room, cardType = "default" }: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Card className="w-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition flex flex-col justify-evenly relative">
      <CardHeader>
        {cardType === "roomCard" && (
          <Button
            onClick={() => setOpen(!open)}
            variant={"ghost"}
            className="w-fit absolute top-2 right-2"
          >
            <X />
          </Button>
        )}
        {open && <DeleteRoomAlertDialog roomId={room.id} />}
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {room.tags && <Tags tags={room.tags} />}
          {room.githubRepo && (
            <Link
              href={room.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <Github
                height={22}
                width={22}
                className="text-white dark:text-black bg-black dark:bg-white rounded-full p-1"
              />
              GitHub Link
            </Link>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/room/${room.id}`}>Join Room</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
