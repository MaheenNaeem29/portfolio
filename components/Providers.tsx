"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** App-wide motion settings — honours the user's reduced-motion preference. */
export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
