"use client";
import React from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
export default function Projects() {
  return (
    <section className="max-w-[40rem] flex flex-col">
      <h2 className="font-bold text-2xl text-center mb-4">Projects</h2>
      {projectsData.map((project, index) => (
        <section className="overflow-hidden relative flex flex-col ">
          <div className="w-1/2 flex flex-col gap-6">
            <div className="flex flex-col  gap-6">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="flex flex-row flex-wrap gap-x-4 gap-y-2">
              {project.tags.map((tag, index) => (
                <div>{tag}</div>
              ))}
            </div>
          </div>
          <Image
            alt={project.title}
            src={project.imageUrl}
            className="absolute right-[-100px] top-8 w-[400px]"
          />
        </section>
      ))}
    </section>
  );
}
