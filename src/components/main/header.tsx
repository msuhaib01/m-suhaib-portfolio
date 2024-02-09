import Link from "next/link";
import { links } from "@/lib/data";
import MotionDiv from "../global/motion-div";
export default function Header() {
  //   const { activeSection, setActiveSection, setTimeOfLastClick } =
  //     useActiveSectionContext();

  return (
    <header className="z-[99] relative">
      <MotionDiv
        className="fixed top-0 sm:top-6 left-1/2 -translate-x-1/2 h-[6rem] sm:h-[3.25rem] w-full sm:w-[40rem] rounded-sm  border-b-2 sm:border-2 border-stone-400 border-opacity-40 bg-[#000000] bg-opacity-55 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]"
        initial={{ y: -100, x: "-50%", opacity: "0" }}
        animate={{ y: 0, x: "-50%", opacity: "1" }}
      ></MotionDiv>
      <nav className="flex fixed top-[0.6rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="h-12 flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-stone-300 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <MotionDiv
              initial={{ y: -100, opacity: "0" }}
              animate={{ y: 0, opacity: "1" }}
              key={link.hash}
            >
              <li className="h-3/4 flex items-center justify-center relative">
                <Link
                  href={link.hash}
                  className="flex w-full items-center justify-center px-3 hover:text-white sm:text-base"
                >
                  {link.name}
                </Link>
              </li>
            </MotionDiv>
          ))}
        </ul>
      </nav>
    </header>
  );
}
