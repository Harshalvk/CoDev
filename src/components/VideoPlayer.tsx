"use client";

import {
  Call,
  CallControls,
  CallParticipantsList,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import type { Room } from "@/db/schema";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { generateTokenAction } from "@/app/room/action";
import { useRouter } from "next/navigation";

export const CoDevVideo = ({ room }: { room: Room }) => {
  const session = useSession();
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!room) return;
    if (!session.data) {
      return;
    }
    const client = new StreamVideoClient({
      apiKey: process.env.NEXT_PUBLIC_GET_STREAM_API_KEY!,
      user: {
        id: session.data.user.id,
        name: session.data.user.name ?? undefined,
        image: session.data.user.image ?? undefined,
      },
      tokenProvider: () => generateTokenAction(),
    });
    setClient(client);
    const call = client.call("default", room.id);
    call.join({ create: true });
    setCall(call);

    return () => {
      call
        .leave()
        .then(() => client.disconnectUser())
        .catch(console.error);
    };
  }, [session, room]);

  return (
    client &&
    call && (
      <StreamVideo client={client}>
        <StreamCall call={call}>
          <StreamTheme>
            <SpeakerLayout />
            <CallControls onLeave={() => router.push("/browse")} />
            <CallParticipantsList onClose={() => undefined} />
          </StreamTheme>
        </StreamCall>
      </StreamVideo>
    )
  );
};
