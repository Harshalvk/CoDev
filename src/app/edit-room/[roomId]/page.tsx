import { getRoom } from "@/data-access/rooms";
import React from "react";
import { EditRoomForm } from "./edit-room-form";
import { unstable_noStore } from "next/cache";

type Props = {
  params: { roomId: string };
};

const EditRoom = async ({ params }: Props) => {
  const { roomId } = await params;
  unstable_noStore()
  let room = await getRoom(roomId);

  if (!room) {
    return <div>"Room not found!"</div>;
  }

  return (
    <div className="container mx-auto flex flex-col gap-8 pt-12 pb-24">
      <h1 className="text-4xl font-bold tracking-tighter">Edit Room</h1>
      <EditRoomForm room={room} />
    </div>
  );
};

export default EditRoom;
