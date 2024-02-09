import Image from "next/image";
import React from "react";
import { GiBottomRight3DArrow } from "react-icons/gi";
import Bold from "../typography/bold";

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
      <h1 className="text-stone-100 text-2xl sm:text-4xl">
        <Bold>Hey there! I'm Suhaib.</Bold> Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Voluptatem laudantium saepe velit,
        reiciendis voluptate a quia neque fugiat perspiciatis impedit, ratione
        at tempore cumque sunt modi dolores repellendus facere aliquid?
      </h1>
    </section>
  );
}
