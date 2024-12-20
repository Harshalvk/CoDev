import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RoomCard from "@/components/RoomCard";
import { SearchBar } from "@/components/SearchBar";
import { getMyRooms } from "@/data-access/rooms";
import { unstable_noStore } from "next/cache";

export default async function MyRoom() {
  unstable_noStore();
  const rooms = await getMyRooms();

  return (
    <>
      <Header />
      <main className="min-h-screen py-24">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-4xl font-semibold tracking-tighter">My Rooms</h1>
          <Button asChild>
            <Link href={"/create-room"}>Create Room</Link>
          </Button>
        </div>
        <div className="my-4">
          <SearchBar />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-2 mt-5">
          {rooms.map((room) => (
            <RoomCard room={room} key={room.id} cardType="roomCard" />
          ))}
        </div>
        {rooms.length === 0 && (
          <div className="w-full mt-24 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold tracking-tighter bg-gradient-to-t from-neutral-400 to-white text-transparent bg-clip-text">
              No rooms yet.
            </h1>
          </div>
        )}
      </main>
    </>
  );
}
