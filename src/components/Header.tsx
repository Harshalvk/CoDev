"use client";

import React from "react";
import { ModeToggle } from "./ModeToggle";
import UserAccountNav from "./UserAccountNav";
import SignInButton from "./SignIn";
import Link from "next/link";
import { motion } from "motion/react";
import User from "./User";

const Header = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 10 }}
      className="z-20 mt-4 flex items-center justify-between py-4 px-6 border rounded-full mx-auto sticky top-4 dark:bg-zinc-950/80 backdrop-blur-md"
    >
      <div>
        <Link href={"/"} className="text-2xl font-bold tracking-tighter">
          CoDev
        </Link>
      </div>
      <div className="flex gap-2 items-center">
        <ModeToggle />
      </div>
    </motion.div>
  );
};

export default Header;
