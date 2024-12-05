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
import { Github } from "lucide-react";
import LanguageTag from "./LanguageTag";

type Props = {
  room: Room;
};

const RoomCard = ({ room }: Props) => {
  return (
    <Card className="w-full max-w-96 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition flex flex-col justify-evenly">
      <CardHeader>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {room.language.split(" ").map((lang, index) => (
            <LanguageTag language={lang} />
          ))}
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
