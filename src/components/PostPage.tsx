import React from "react";
import { client } from "@/sanity/lib/client";
import { Post } from "@/lib/interfaces";
import PostComponents from "./PostComponents";
import { Lilita_One } from 'next/font/google'

async function getPost() {
  const query = `
    *[_type == "post"] {
      _id,
      title,
      image {
        asset -> { _id, url },
        alt
      },
      publishedAt,
      slug,
      body,
      excerpt,
      tags[]-> {
      _id,
      slug,
      name
      }
  }`;

  const data = await client.fetch(query);
  return data;
}

const lilitaFont = Lilita_One({weight: "400", subsets:["latin"]})

export default async function PostPage() {
  const posts: Post[] = await getPost();
  return (
    <div className="my-10 px-6 py-4 max-w-7xl mx-auto">
      <h1 className={`${lilitaFont.className} text-center text-6xl font-bold mb-10`}>Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
        {posts.map((post) => (
          <PostComponents key={post._id} posts={post} />
        ))}
      </div>
    </div>
  );
}
