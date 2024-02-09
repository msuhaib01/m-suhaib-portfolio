import Image from "next/image";
import React from "react";
import { GiBottomRight3DArrow } from "react-icons/gi";
import Bold from "../typography/bold";
import Italic from "../typography/italic";
import Underline from "../typography/underline";

export default function Intro() {
  return (
    <section className="max-w-[40rem] flex flex-col items-center justify-center text-center gap-5">
      <div className="relative">
        <Image
          src="/Tempest.jpg"
          alt="My Logo"
          width={128}
          height={128}
          priority={true}
          className="rounded-full size-32 border-4 border-stone-200"
        />
        <div className="absolute rotate-180 right-[-24px] bottom-[16px]">
          <GiBottomRight3DArrow className="size-5"></GiBottomRight3DArrow>
        </div>
        <p
          className={`text-stone-100 absolute right-[-100px] bottom-[-4px] text-3xl font-cursive`}
        >
          my logo
        </p>
      </div>
      <h1 className="text-stone-100 text-2xl sm:text-3xl">
        <Bold>Hey there! I'm Suhaib.</Bold>
        <br />
        I'm an <Bold>IBM Certified Fullstack Developer.</Bold>
        <br />I <Italic>build, innovate, and solve</Italic> business problems
        using <Underline>NextJS and React</Underline>.<br />
        <Italic className="text-xl">
          (Along with any other tools I can get my hands on.)
        </Italic>
      </h1>
    </section>
  );
}
