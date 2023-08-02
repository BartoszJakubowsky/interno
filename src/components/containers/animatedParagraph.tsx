"use-client";
import type { ReactNode } from "react";
import { motion as m, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedParagraphProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedParagraph({
  className,
  children,
  ...rest
}: AnimatedParagraphProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <m.p
      ref={ref}
      className={className}
      id="target-paragraph"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      {...rest}
    >
      Jakiś tekst
    </m.p>
  );
}
