import Tags from "@/components/Tags";
import { CoDevVideo } from "@/components/VideoPlayer";
import { getRoom } from "@/data-access/rooms";
import { Github } from "lucide-react";
import { unstable_noStore } from "next/cache";
import Link from "next/link";
import React from "react";

type Props = {
  params: { roomId: string };
};

const RoomPage = async ({ params }: Props) => {
  const { roomId } = await params;
  unstable_noStore();
  const room = await getRoom(roomId);

  if (!room) {
    return <div>No room found!</div>;
  }

  return (
    <div className="grid grid-cols-4 min-h-screen">
      <div className="col-span-3 p-3">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
          <CoDevVideo room={room} />
        </div>
      </div>
      <div className="col-span-1 p-3">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
          <h1 className="text-lg font-semibold">{room?.name}</h1>
          <p className="text-neutral-500">{room?.description}</p>
          <div className="flex flex-wrap gap-2">
            {room.tags && <Tags tags={room.tags} />}
          </div>
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
                className="text-white text-md dark:text-black bg-black dark:bg-white rounded-full p-1"
              />
              GitHub Link
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
