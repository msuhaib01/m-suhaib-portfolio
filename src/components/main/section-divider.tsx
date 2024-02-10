import React from "react";
import MotionDiv from "../global/motion-div";

type SectionDividerProps = {
  id?: string;
};

export default function SectionDivider({ id }: SectionDividerProps) {
  return (
    <div id={id} className="flex gap-32">
      <MotionDiv
        className="bg-stone-200 h-24 w-1 rounded-full hidden sm:block dark:bg-opacity-15"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.225 }}
      ></MotionDiv>
      <MotionDiv
        className="bg-stone-200 h-24 w-1 rounded-full hidden sm:block dark:bg-opacity-15"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.225 }}
      ></MotionDiv>
    </div>
  );
}
