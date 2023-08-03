"use client";

interface AnimatedContainerProps {
  children: ReactNode;
  className?: string;
  initial? : {}
  animate? : {}
  transition? : {}
}

import { motion as m } from "framer-motion";
import { ReactNode } from "react";
export default function AnimatedContainer({
  children,
  className,
  initial,
  animate, 
  transition,
  ...rest
}: AnimatedContainerProps) {
  return (
    <m.div
      className={`${className}`}
      initial={ initial || {opacity: 0, x: 0, y: 50 }}
      animate={ animate || { opacity: 1, x: 0, y: 0 }}
      transition={ transition || { duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </m.div>
  );
}
