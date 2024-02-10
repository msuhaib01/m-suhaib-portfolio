"use client";
import React from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import ScrollShrinker from "../global/scroll-shrinker";
import { useNavBarScrollEffect } from "@/lib/hooks";
export default function Projects() {
  const ref = useNavBarScrollEffect("Projects", 0.2);

  return (
    <section
      ref={ref}
      id={"projects"}
      className="max-w-[48rem] flex flex-col scroll-mt-24"
    >
      <h2 className="font-bold text-4xl text-center mb-4 mt-4 ">Projects</h2>
      <div className="flex flex-col gap-12 p-8">
        {projectsData.map((project, index) => (
          <ScrollShrinker key={project.title} className="group">
            <section className="shadow-2xl shadow-black group-hover:scale-105 group-hover:bg-[#3b3b3b7c] transition overflow-hidden relative flex flex-col sm:items-start group-even:sm:items-end items-center rounded-sm bg-black/[0.5] p-8">
              <div className="sm:w-1/2 flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="flex flex-row flex-wrap gap-x-4 gap-y-3">
                  {project.tags.map((tag, index) => (
                    <div
                      key={tag}
                      className="text-stone-950 font-semibold bg-white/[0.8] py-1 px-3 text-sm flex justify-center items-center rounded-full "
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <Image
                  alt={project.title}
                  src={project.imageUrl}
                  className="sm:absolute sm:right-[-330px] sm:top-[30px] sm:w-[600px] group-even:sm:left-[-330px] shadow-2xl shadow-black transition group-hover:scale-105 sm:group-hover:-rotate-2 sm:group-hover:-translate-x-5 sm:group-even:group-hover:rotate-2 sm:group-even:group-hover:translate-x-5 "
                />
              </div>
            </section>
          </ScrollShrinker>
        ))}
      </div>
    </section>
  );
}
