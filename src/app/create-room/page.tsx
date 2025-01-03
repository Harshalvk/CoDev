import React from "react";
import { CreateRoomForm } from "./create-room-form";

const page = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 pt-12 pb-24">
      <h1 className="text-4xl font-bold tracking-tighter">Create Room</h1>
      <CreateRoomForm />
    </div>
  );
};

export default page;
