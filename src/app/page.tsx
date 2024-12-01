import SignIn from "@/components/SignIn";
import { db } from "@/db";

export default async function Home() {
  const items = await db.query.testing.findMany();

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <SignIn />
      </div>
    </>
  );
}
