"use client";

import React, { Children } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

// export const MotionDiv = motion.div;

type MotionDivProps = {
  children?: React.ReactNode;
} & HTMLMotionProps<"div">;

export default function MotionDiv({ children, ...restProps }: MotionDivProps) {
  return <motion.div {...restProps}>{children}</motion.div>;
}
