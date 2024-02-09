import React from "react";
import MotionDiv from "../global/motion-div";

export default function SectionDivider() {
  return (
    <div className="flex gap-32">
      <MotionDiv
        className="bg-stone-200 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-15"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.225 }}
      ></MotionDiv>
      <MotionDiv
        className="bg-stone-200 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-15"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.225 }}
      ></MotionDiv>
    </div>
  );
}
