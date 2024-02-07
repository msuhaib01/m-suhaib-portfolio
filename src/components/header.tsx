"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { links } from "@/lib/data";

export default function Header() {
  //   const { activeSection, setActiveSection, setTimeOfLastClick } =
  //     useActiveSectionContext();

  return (
    <header className="z-[99] relative">
      <motion.div
        className="fixed top-0 sm:top-6 left-1/2 -translate-x-1/2 h-[6rem] sm:h-[3.25rem] w-full sm:w-[40rem] rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]"
        initial={{ y: -100, x: "-50%", opacity: "0" }}
        animate={{ y: 0, x: "-50%", opacity: "1" }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="h-12 flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-700 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: "0" }}
              animate={{ y: 0, opacity: "1" }}
            >
              <Link
                href={link.hash}
                className="flex w-full items-center justify-center px-3 hover:text-gray-950 text-xl sm:text-base"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
