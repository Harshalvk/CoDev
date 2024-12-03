import React from "react";
import { auth } from "../../auth";
import Image from "next/image";

const UserAvatar = async () => {
  const session = await auth();
  const user = session?.user;
  
  return (
    <div className="flex items-center gap-1">
      <p>{user?.name}</p>
      <Image
        src={user?.image!}
        alt={`${user?.name} profile-image`}
        height={38}
        width={38}
        className="rounded-full"
      />
    </div>
  );
};

export default UserAvatar;
