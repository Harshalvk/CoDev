import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RoomCard from "@/components/RoomCard";
import { getRooms } from "@/data-access/rooms";
import { auth } from "../../auth";
import { redirect } from "next/navigation";
import { SearchBar } from "@/components/SearchBar";

type Props = {
  searchParams: {
    search: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const { search } = await searchParams;
  const rooms = await getRooms(search);
  const session = await auth();

  return (
    <>
      <Header />
      <main className="mt-20">
        <div className="w-full flex flex-col items-center gap-3">
          <h1 className="font-semibold text-7xl tracking-tighter bg-gradient-to-t from-neutral-300 to-white text-transparent bg-clip-text p-2">
            Code Live, Build Together
          </h1>
          <p className="text-center max-w-[520px] text-neutral-500">
            Experience the power of real-time collaboration. Join rooms to
            discuss, develop, and deliver your projects as a team.
          </p>
          <div className="space-x-2">
            <Button variant={"ghost"}>Browse Rooms</Button>
            <Button>Create Room</Button>
          </div>
        </div>
      </main>
    </>
  );
}
