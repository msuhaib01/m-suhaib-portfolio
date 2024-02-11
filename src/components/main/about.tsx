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
      className="background flex justify-center items-center bg-fixed bg-cover w-[100vw] h-[1000px]"
    >
      <ScrollShrinker>
        <div className="rounded-sm max-w-[44rem] p-16 bg-[#000000b0] backdrop-blur-md shadow-xl shadow-black flex flex-col gap-3">
          <h2 className="text-center font-bold text-2xl">About Me</h2>
          <p className="text-justify">
            I spent near a decade living in New York City, picked up quite the
            accent. I've always been interested in computers, from the old days
            when I had a rig with 2gb ram and a Intel Core Duo, to playing
            Minecraft at the lowest settings possible off a USB drive on my
            local library PC.
          </p>
          <p className="text-justify">
            Now I'm a Software Engineer for real (And a freelancer!) and I've
            build many fullstack applications using NextJS, Typescript, and
            React.
          </p>
        </div>
      </ScrollShrinker>
    </section>
  );
}
