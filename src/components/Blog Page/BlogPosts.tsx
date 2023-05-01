import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import type { MarkdownInstance } from "astro";
import { useState } from "react";

interface Props {
  posts: MarkdownInstance<Record<string, any>>[];
  tags: string[];
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function BlogPosts({ posts, tags }: Props) {
  const [filter, setFilter] = useState("");

  return (
    <div className="md:m-10 m-4">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            {filter ? filter : "Filter"}
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="translate-x-40 absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1 ">
              {tags?.map((tag) => {
                return (
                  <Menu.Item key={tag}>
                    {({ active }) => (
                      <p
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                        onClick={() => {
                          setFilter(tag);
                        }}
                      >
                        {tag}
                      </p>
                    )}
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        {posts?.map((post) => {
          if (post.frontmatter.tags.includes(filter) || filter === "") {
            return (
              <a href={post.url} key={post.url}>
                <div className="relative flex flex-col w-auto bg-zinc-200 justify-center rounded shadow-lg p-4 h-full">
                  <img className="w-full " src={post.frontmatter.image.url} />
                  <div className="text-lg font-bold flex align-middle justify-center mt-2">
                    {post.frontmatter.title}
                  </div>
                  <div className="text-sm font-semibold flex align-middle justify-center mt-2 text-center">
                    {post.frontmatter.description}
                  </div>
                </div>
              </a>
            );
          }
        })}
      </div>
    </div>
  );
}
