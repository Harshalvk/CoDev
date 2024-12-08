import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RoomCard from "@/components/RoomCard";
import { SearchBar } from "@/components/SearchBar";
import { getMyRooms } from "@/data-access/rooms";

export default async function MyRoom() {
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
      </main>
    </>
  );
}
