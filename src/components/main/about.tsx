import Image from "next/image";
import React from "react";
import MotionDiv from "../global/motion-div";

export default function About() {
  return (
    <section
      id={"about"}
      className="background w-full flex justify-center items-center bg-fixed bg-cover py-48"
    >
      <MotionDiv>
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
      </MotionDiv>
    </section>
  );
}
