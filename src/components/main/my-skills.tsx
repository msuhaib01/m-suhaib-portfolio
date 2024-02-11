"use client";
import React from "react";
import { skillsData } from "@/lib/data";
import { useNavBarScrollEffect } from "@/lib/hooks";
import { motion } from "framer-motion";
export default function MySkills() {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  const ref = useNavBarScrollEffect("Skills", 0.75);
  let isMobile: boolean = true;
  if (typeof window !== "undefined") {
    isMobile = window.innerWidth < 640;
  }

  return (
    <section
      id={"skills"}
      ref={ref}
      className="flex flex-col max-w-[36rem] scroll-m-24 gap-6 mx-8"
    >
      <h2 className="font-bold text-4xl text-center mb-4 mt-4 text-nowrap">
        My Skills
      </h2>
      <ul className="flex flex-row gap-6 flex-wrap justify-center">
        {skillsData.map((data, index) => (
          <motion.li
            className="py-2 px-4 bg-stone-100/75 text-stone-900 font-semibold rounded-lg border-stone-900/50 shadow-2xl shadow-black"
            key={data + "hi"}
            variants={fadeInAnimationVariants}
            initial={isMobile ? "" : "initial"}
            whileInView={isMobile ? "" : "animate"}
            viewport={{
              once: true,
            }}
            custom={() => {
              if (typeof window !== "undefined") {
                if (window.innerWidth < 640) {
                  return 0;
                } else return index;
              }
            }}
          >
            {data}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
