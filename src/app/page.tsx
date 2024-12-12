"use client";

import Features from "@/components/Features";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="my-44">
        <div className="max-h-[548px]">
          <div className="bg-[url('/grid.svg')] max-w-7xl max-h-[548px] mt-24 mx-auto opacity-20 absolute inset-0 [mask-image:radial-gradient(ellipse,#000_10%,transparent_80%)]"></div>
          <div className="mt-44 w-full flex flex-col items-center gap-3 relative">
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{
                y: -10,
                opacity: 1,
              }}
              className="font-semibold text-5xl text-center md:text-7xl lg:text-8xl tracking-tighter bg-gradient-to-t from-neutral-300 to-white text-transparent bg-clip-text p-2"
            >
              Code Live, Build Together
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{
                y: -10,
                opacity: 1,
              }}
              transition={{
                delay: 0.1,
              }}
              className="text-center text-sm md:text-md lg:text-lg max-w-[520px] text-neutral-500"
            >
              Experience the power of real-time collaboration. Join rooms to
              discuss, develop, and deliver your projects as a team.
            </motion.p>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{
                y: -10,
                opacity: 1,
              }}
              transition={{
                delay: 0.2,
              }}
              className="space-x-2"
            >
              <Button variant={"secondary"}>Browse Rooms</Button>
              <Button>Create Room</Button>
            </motion.div>
          </div>
        </div>
      </main>
      <Features />
    </>
  );
}
