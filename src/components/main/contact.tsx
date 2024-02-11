"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useNavBarScrollEffect } from "@/lib/hooks";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { sendEmail } from "@/actions/sendEmail";
export default function Contact() {
  const ref = useNavBarScrollEffect("Contact", 0.5);

  return (
    <section
      id="contact"
      ref={ref}
      className="max-w-[42rem] scroll-m-24 flex gap-3 flex-col mx-8"
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
      <form
        className="flex flex-col gap-4"
        action={async (formData) => {
          console.log("running on client");
          console.log(formData.get("email"));
          console.log(formData.get("message"));
          const res = await sendEmail(formData);
          console.log(res);
          if (res.success) {
          }
        }}
      >
        <input
          className="font-semibold h-14 px-4 rounded-sm borderBlack bg-white bg-opacity-80 focus:scale-[1.01] focus:bg-opacity-100 transition-all outline-none text-stone-900"
          type={"email"}
          placeholder="Your email."
          required={true}
          maxLength={300}
          name="email"
        />
        {/* name is what is used to get the data from response object */}
        <textarea
          className="font-semibold h-40 p-4 rounded-sm borderBlack bg-white bg-opacity-80 focus:scale-[1.01] focus:bg-opacity-100 transition-all outline-none text-stone-900"
          placeholder="Your Message."
          required={true}
          maxLength={1000}
          name="message"
        />
        <button
          type="submit"
          className="group flex justify-center transition hover:scale-[1.02] active:scale-100 items-center gap-2 py-2 px-4 rounded-sm  border-2 border-stone-600 border-opacity-40 bg-stone-900 bg-opacity-90 text-stone-50 shadow-lg shadow-black/[0.5]"
        >
          Send Message{" "}
          <FaTelegramPlane className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </section>
  );
}
