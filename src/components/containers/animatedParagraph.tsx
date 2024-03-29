"use-client";
import type { ReactNode } from "react";
import { motion as m, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedParagraphProps {
  children: ReactNode;
  className?: string;
  left? : boolean,
  delay?: number
}

export default function AnimatedParagraph({
  className,
  children,
  left,
  delay,
  ...rest
}: AnimatedParagraphProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <m.div
      ref={ref}
      className={className}
      id="target-paragraph"
      initial={{ opacity: 0, x: left? 100: -100, y: 0 }}
      animate={{ opacity: isInView ? 1 : 0, x: 0, y: 0 }}
      transition={{ duration: 0.5, delay: delay, ease: 'easeInOut' }}
      {...rest}
    >
      {children}
    </m.div>
  );
}
