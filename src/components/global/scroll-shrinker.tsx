"use client";
import React from "react";
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
    offset: ["0 1", "0.75 1"],
    // "target window" "target window"
    // 0 means start/top
    // 1 means end/bottom
    // first array tells of what 0 should be hence, when targets top meets bottom of window, set 0.
    // second array tells of what 1 should be hence, when targets bottom meets bottom of window, set 1.
    // but targets bottom is 1.25 what mean then? we dont want animation to stop moment targets bottom is visible, we want it to
    // keep going for a bit hence we make it 1.25 so that that point goes a little beyond target bottom to empty spot.

    //think through logically for any other possible wanted combination.
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

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
