import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import type { MarkdownInstance } from "astro";
import { useState } from "react";

interface Props {
  projects: MarkdownInstance<Record<string, any>>[];
}

interface Project {
  title: string;
  img: string;
  alt: string;
  description: string;
}

export default function PortfolioPosts({ projects }: Props) {
  console.log(projects);
  return (
    <div className="md:m-10 m-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {projects?.map((project) => {
          return (
            <a href={project.url} key={project.url}>
              <div
                key={project.frontmatter.title}
                className="relative flex flex-col w-auto bg-zinc-200 justify-center rounded shadow-lg p-4 h-full"
              >
                <img
                  className="w-full"
                  src={project.frontmatter.image?.url}
                  alt={project.frontmatter.image?.alt}
                />
                <div className="text-lg font-bold flex align-middle justify-center mt-2">
                  {project.frontmatter.title}
                </div>
                <div className="text-sm font-semibold flex align-middle justify-center mt-2 text-center">
                  {project.frontmatter.description}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
