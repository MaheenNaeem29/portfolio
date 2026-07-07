"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Wraps each page in a subtle fade/slide transition on navigation. */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-[calc(100vh-4rem)]"
    >
      {children}
    </motion.main>
  );
}
