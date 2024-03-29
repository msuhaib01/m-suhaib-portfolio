"use client";
import React, { useContext, useEffect } from "react";
import ScrollShrinker from "../global/scroll-shrinker";
import { useNavBarScrollEffect } from "@/lib/hooks";

export default function About() {
  const ref = useNavBarScrollEffect("About", 0.5);
  return (
    <section
      ref={ref}
      id={"about"}
      className="relative w-[100vw] h-[700px] flex justify-center items-center"
    >
      <div className="absolute z-[-1] top-0 left-0 background flex justify-center items-center bg-scroll sm:bg-fixed bg-cover bg-center w-[100vw] h-[700px]"></div>
      <ScrollShrinker>
        <div className="rounded-sm max-w-[44rem] p-16 bg-[#000000b0] backdrop-blur-md shadow-xl shadow-black flex flex-col gap-3">
          <h2 className="text-center font-bold text-2xl">About Me</h2>
          <p className="text-justify">
            I spent near a decade living in New York City, picked up quite the
            accent. I've always been interested in computers and solving
            problems, figuring out how to play games like Worms or CS1.6 at the
            lowest settings possible off a USB drive on my local library PC.
          </p>
          <p className="text-justify">
            Now I'm a Software Engineer and though the methods may be different,
            I still solve problems. Web Design problems, business problems,
            problems problems. I'm here to help you with problems.
          </p>
        </div>
      </ScrollShrinker>
    </section>
  );
}
