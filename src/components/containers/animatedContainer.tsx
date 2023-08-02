"use client";

interface AnimatedContainerProps {
  children: ReactNode;
  className?: string;
}

import { motion as m } from "framer-motion";
import { ReactNode } from "react";
export default function AnimatedContainer({
  children,
  className,
  ...rest
}: AnimatedContainerProps) {
  return (
    <m.div
      className={`${className} min-h-screen`}
      initial={{ opacity: 0, x: 0, y: 50 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </m.div>
  );
}
