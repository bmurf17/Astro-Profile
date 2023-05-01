import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import type { MarkdownInstance } from "astro";
import { useState } from "react";

interface Props {
  posts: MarkdownInstance<Record<string, any>>[];
  tags: string[];
}

interface Project {
  title: string;
  img: string;
  alt: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Book Tracker",
    img: "https://novoamor.co.uk/wp-content/uploads/2020/07/whatsoever.jpg",
    alt: "book site image",
    description: "A place where I can keep track of what I'm reading.",
  },
  {
    title: "Personal Site",
    img: "https://media.pitchfork.com/photos/63c80a33520ff5b5e58eb1d3/1:1/w_320,c_limit/The-National-First-Two-Pages-of-Frankenstein.jpg",
    alt: "personal site image",
    description: "A hub for where you can find me online.",
  },
  {
    title: "Blog",
    img: "https://f4.bcbits.com/img/a1392427010_16.jpg",
    alt: "blog image",
    description: "Where I would put my thoughts.",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function PortfolioPosts({ posts }: Props) {
  return (
    <div className="md:m-10 m-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {projects?.map((project) => {
          return (
            <div
              key={project.title}
              className="relative flex flex-col w-auto bg-zinc-200 justify-center rounded shadow-lg p-4 h-full"
            >
              <img className="w-full" src={project.img} alt={project.alt} />
              <div className="text-lg font-bold flex align-middle justify-center mt-2">
                {project.title}
              </div>
              <div className="text-sm font-semibold flex align-middle justify-center mt-2 text-center">
                {project.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
