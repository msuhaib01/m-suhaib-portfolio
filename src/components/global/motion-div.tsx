"use client";

import React, { Children } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type MotionDivProps = {
  children?: React.ReactNode;
} & HTMLMotionProps<"div">;

export default function MotionDiv({
  children,
  transition,
  ...restProps
}: MotionDivProps) {
  if (typeof window !== "undefined") {
    if (window.innerWidth < 640) {
      transition = {};
    }
  }

  return <motion.div {...restProps}>{children}</motion.div>;
}
