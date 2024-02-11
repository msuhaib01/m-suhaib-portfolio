"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useNavBarScrollEffect } from "@/lib/hooks";
import React from "react";

export default function Contact() {
  const ref = useNavBarScrollEffect("Contact", 0.5);
  return (
    <section
      id="contact"
      ref={ref}
      className="max-w-[42rem] scroll-m-24 flex gap-3 flex-col"
    >
      {" "}
      <h2 className="font-bold text-4xl text-center mb-4 mt-4 text-nowrap">
        Contact Me
      </h2>
      <p className="text-sm text-center">
        Please contact me with any queries at{" "}
        <a className="underline " href="mailto:muhammadsuhaib17776@gmail.com">
          muhammadsuhaib17776@gmail.com
        </a>{" "}
        or use this contact form!
      </p>
      <input
        className="h-14 px-4 rounded-sm borderBlack bg-white bg-opacity-80 focus:scale-[1.01] focus:bg-opacity-100 transition-all outline-none text-stone-900"
        type={"email"}
        placeholder="Your email."
      />
      <textarea
        className="h-40 p-4 rounded-sm borderBlack bg-white bg-opacity-80 focus:scale-[1.01] focus:bg-opacity-100 transition-all outline-none text-stone-900"
        placeholder="Your Message."
      />
      <button
        type="submit"
        className="flex justify-center transition hover:scale-[1.02] active:scale-100 items-center gap-2 py-2 px-4 rounded-sm  border-2 border-stone-600 border-opacity-40 bg-stone-900 bg-opacity-90 text-stone-50 shadow-lg shadow-black/[0.5]"
      >
        Send Message
      </button>
    </section>
  );
}
