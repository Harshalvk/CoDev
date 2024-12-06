"use server";

import { auth } from "../../../auth";
import { StreamChat } from "stream-chat";

export const generateTokenAction = async () => {
  const session = await auth();

  if (!session) {
    throw new Error("No session found");
  }

  const apiKey = process.env.NEXT_PUBLIC_GET_STREAM_API_KEY!;
  const apiSecret = process.env.GET_STREAM_SECRET;
  const serverClient = StreamChat.getInstance(apiKey, apiSecret);
  const token = serverClient.createToken(session.user.id);

  return token;
};
