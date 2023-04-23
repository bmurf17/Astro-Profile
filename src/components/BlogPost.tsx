import type { MarkdownInstance } from "astro";
import { useState } from "react";

interface Props {
  posts: MarkdownInstance<Record<string, any>>[];
  tags: string[];
}

export default function BlogPost({ posts, tags }: Props) {
  return (
    <div>
      {tags?.map((tag) => {
        return <>{tag}</>;
      })}
      <ul>
        {posts?.map((post) => {
          return (
            <li>
              <a href={post.url}>{post.frontmatter.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
