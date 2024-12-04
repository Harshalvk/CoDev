import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen p-24">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-4xl font-semibold tracking-tighter">
            Find Dev Rooms
          </h1>
          <Button asChild>
            <Link href={"/create-room"}>Create Room</Link>
          </Button>
        </div>
      </main>
    </>
  );
}
