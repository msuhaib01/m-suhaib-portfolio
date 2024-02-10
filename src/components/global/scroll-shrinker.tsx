"use client";
import React, { Children } from "react";
import { useRef } from "react";
import {
  motion,
  HTMLMotionProps,
  useScroll,
  useTransform,
} from "framer-motion";
type ScrollShrinkerProps = {
  children?: React.ReactNode;
} & HTMLMotionProps<"div">;

export default function ScrollShrinker({
  children,
  ...restProps
}: ScrollShrinkerProps) {
  const shrinkRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: shrinkRef,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      ref={shrinkRef}
      {...restProps}
    >
      {children}
    </motion.div>
  );
}
