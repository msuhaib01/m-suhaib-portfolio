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
import nraysImage from "@/../public/nrays_nobackground.png";
import myLogo from "@/../public/Tempest.jpg";
import { useNavBarScrollEffect } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
export default function Intro() {
  const ref = useNavBarScrollEffect("Home", 0.5);
  const { activeSection, setActiveSection, setTimeLastClicked } =
    useActiveSectionContext();

  return (
    <section
      ref={ref}
      id={"home"}
      className="max-w-[40rem] flex flex-col items-center justify-center text-center gap-5 scroll-m-[300px]"
    >
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
            src={myLogo}
            alt="My Logo"
            priority={true}
            className="rounded-full size-32 border-4 border-stone-200"
          />
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <div className="absolute rotate-180 right-[-24px] bottom-[16px]">
            <GiBottomRight3DArrow className="size-5"></GiBottomRight3DArrow>
          </div>
          <p
            className={`text-stone-100 absolute right-[-100px] bottom-[-4px] text-3xl font-cursive hover:cursor-default`}
          >
            my logo
          </p>
        </MotionDiv>
      </div>
      <MotionDiv
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
      >
        <h1 className="text-stone-100 text-2xl sm:text-3xl !leading-[1.5] m-4">
          <Bold>Hey there! I'm Suhaib.</Bold>
          <br />
          I'm an{" "}
          <Bold>
            IBM™ Certified Fullstack Developer and DevOps Software Engineer.
          </Bold>
          <br />I <Italic>build, innovate, and solve</Italic> business problems
          using <Underline>AI, Azure, and React</Underline>.<br />
          <Italic className="text-lg sm:text-xl">
            (Along with any other tools I can{" "}
            <span className="text-nowrap">get my hands-on.</span>)
          </Italic>
        </h1>
      </MotionDiv>
      <MotionDiv
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.25,
        }}
      >
        <div className="actions-bar flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              className="transition focus:scale-110 hover:scale-110 active:scale-105 justify-between flex items-center gap-2 py-2 px-4 rounded-sm  border-2 border-stone-600 border-opacity-40 bg-stone-50 bg-opacity-90 text-stone-950 shadow-lg shadow-black/[0.5]"
              href={`#contact`}
              onClick={() => {
                setActiveSection("Contact");
                setTimeLastClicked(Date.now());
              }}
            >
              Contact me here <FaArrowRightLong />
            </Link>
            <Link
              className="transition focus:scale-110 hover:scale-110 active:scale-105 justify-between flex items-center gap-2 py-2 px-4 rounded-sm  border-2 border-stone-600 border-opacity-40 bg-stone-900 bg-opacity-90 text-stone-50 shadow-lg shadow-black/[0.5]"
              href={`/MSuhaibCV.docx`}
              download={true}
            >
              Download my CV <FaFileDownload />
            </Link>
            {/* <a
              target="_blank"
              href={"https://nrays.dev"}
              className="transition focus:scale-110 hover:scale-110 active:scale-105 justify-between flex items-center gap-2 py-2 px-4 rounded-sm  border-2 border-stone-600 border-opacity-40 bg-stone-900 bg-opacity-90 text-stone-50 shadow-lg shadow-black/[0.5]"
            >
              My Company's Site{" "}
              <Image
                className={"size-4"}
                src={nraysImage}
                alt="company logo"
              ></Image>
            </a> */}
          </div>
          <div className="flex gap-4 justify-center">
            <a
              target="_blank"
              href={"https://www.linkedin.com/in/muhammad-suhaib-925620274/"}
              className="transition focus:scale-110 hover:scale-110 active:scale-105 flex justify-center items-center rounded-full size-10 border-b-2 sm:border-2 border-stone-600 border-opacity-40 bg-stone-900 bg-opacity-90 text-stone-50 shadow-lg shadow-black/[0.5]"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              href={"https://github.com/msuhaib01"}
              className="transition focus:scale-110 hover:scale-110 active:scale-105 flex justify-center items-center rounded-full size-10 border-b-2 sm:border-2 border-stone-600 border-opacity-40 bg-stone-900 bg-opacity-90 text-stone-50 shadow-lg shadow-black/[0.5]"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </MotionDiv>
    </section>
  );
}
