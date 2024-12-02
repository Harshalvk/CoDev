import NextAuth from "next-auth";
import { db } from "@/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import type { Adapter } from "next-auth/adapters";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db) as Adapter,
  providers: [Google, GitHub],
  pages: {
    signIn: "/login",
  },
});
