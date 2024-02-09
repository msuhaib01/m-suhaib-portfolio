"use client";
import Image from "next/image";
import React from "react";
import { GiBottomRight3DArrow } from "react-icons/gi";
import Bold from "../typography/bold";
import Italic from "../typography/italic";
import Underline from "../typography/underline";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import MotionDiv from "../global/motion-div";

export default function Intro() {
  return (
    <section className="max-w-[40rem] flex flex-col items-center justify-center text-center gap-5">
      <div className="image relative">
        <MotionDiv
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src="/Tempest.jpg"
            alt="My Logo"
            width={128}
            height={128}
            priority={true}
            className="rounded-full size-32 border-4 border-stone-200"
          />
        </MotionDiv>
        <div className="absolute rotate-180 right-[-24px] bottom-[16px]">
          <GiBottomRight3DArrow className="size-5"></GiBottomRight3DArrow>
        </div>
        <p
          className={`text-stone-100 absolute right-[-100px] bottom-[-4px] text-3xl font-cursive hover:cursor-default`}
        >
          my logo
        </p>
      </div>
      <h1 className="text-stone-100 text-2xl sm:text-3xl !leading-[1.5]">
        <Bold>Hey there! I'm Suhaib.</Bold>
        <br />
        I'm an <Bold>IBM Certified Fullstack Developer.</Bold>
        <br />I <Italic>build, innovate, and solve</Italic> business problems
        using <Underline>NextJS and React</Underline>.<br />
        <Italic className="text-lg sm:text-xl">
          (Along with any other tools I can{" "}
          <span className="text-nowrap">get my hands-on.</span>)
        </Italic>
      </h1>
      <div className="actions-bar flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            className="justify-between flex items-center gap-2 py-2 px-4 rounded-sm  border-b-2 sm:border-2 border-stone-600 border-opacity-40 bg-stone-50 bg-opacity-90 text-stone-950 shadow-lg shadow-black/[0.5]"
            href={`#contact`}
          >
            Contact me here <FaArrowRightLong />
          </Link>
          <Link
            className="justify-between flex items-center gap-2 py-2 px-4 rounded-sm  border-b-2 sm:border-2 border-stone-600 border-opacity-40 bg-stone-900 bg-opacity-90 text-stone-50 shadow-lg shadow-black/[0.5]"
            href={`/cv.docx`}
            download={true}
          >
            Download my CV <FaFileDownload />
          </Link>
          <a
            target="_blank"
            href={"https://nrays.dev"}
            className="justify-between flex items-center gap-2 py-2 px-4 rounded-sm  border-b-2 sm:border-2 border-stone-600 border-opacity-40 bg-stone-900 bg-opacity-90 text-stone-50 shadow-lg shadow-black/[0.5]"
          >
            My Company's Site{" "}
            <Image
              src={"/nrays_nobackground.png"}
              alt="company logo"
              height={30}
              width={30}
            ></Image>
          </a>
        </div>
        <div className="flex gap-4 justify-center">
          <a
            target="_blank"
            href={"https://nrays.dev"}
            className="flex justify-center items-center rounded-full size-10 border-b-2 sm:border-2 border-stone-600 border-opacity-40 bg-stone-900 bg-opacity-90 text-stone-50 shadow-lg shadow-black/[0.5]"
          >
            <FaLinkedin />
          </a>
          <a
            target="_blank"
            href={"https://nrays.dev"}
            className="flex justify-center items-center rounded-full size-10 border-b-2 sm:border-2 border-stone-600 border-opacity-40 bg-stone-900 bg-opacity-90 text-stone-50 shadow-lg shadow-black/[0.5]"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
