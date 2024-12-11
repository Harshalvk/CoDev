import RoomCard from "@/components/RoomCard";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { getRooms } from "@/data-access/rooms";
import { unstable_noStore } from "next/cache";
import Link from "next/link";
import React from "react";

type Props = {
  searchParams: {
    search: string;
  };
};

const page = async ({ searchParams }: Props) => {
  const { search } = await searchParams;
  unstable_noStore();
  const rooms = await getRooms(search);

  return (
    <main className="min-h-screen py-24">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-4xl font-semibold tracking-tighter">
          Find Dev Rooms
        </h1>
        <div className="flex gap-2">
          <Button asChild>
            <Link href={"/my-rooms"}>My Rooms</Link>
          </Button>
          <Button asChild>
            <Link href={"/create-room"}>Create Room</Link>
          </Button>
        </div>
      </div>
      <div className="my-4">
        <SearchBar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-2 mt-5">
        {rooms.map((room) => (
          <RoomCard room={room} key={room.id} />
        ))}
        {rooms.length === 0 && (
          <div className="w-full mt-24 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold tracking-tighter bg-gradient-to-t from-neutral-400 to-white text-transparent bg-clip-text">
              No rooms yet.
            </h1>
          </div>
        )}
      </div>
    </main>
  );
};

export default page;
