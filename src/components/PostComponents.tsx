'use client'
import { Post } from "@/lib/interfaces";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

interface PostProp {
  posts: Post;
}

const PostComponents = ({ posts }: PostProp) => {
  const imageUrl = posts.image?.asset ? urlFor(posts.image.asset).url() : null;
  const router = useRouter();

  return (
    <div className="hover:scale-105 transition duration-300">
      <Card className="h-[42rem] md:h-[40rem] flex flex-col max-w-xl my-4 dark:border dark:border-white/50">
        <Link href={`posts/${posts.slug.current}`}>
          {imageUrl ? (
            <div className="w-full h-[200px] relative">
              <Image
                src={imageUrl}
                alt={posts.image?.alt || "Post image"}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
          ) : (
            <div className="bg-gray-300 w-full h-[300px]">
              No Image Available
            </div>
          )}
        </Link>
        <CardHeader>
          <p className="mb-2 font-semibold text-sm dark:text-purple-500">
            {new Date(posts.publishedAt).toDateString()}
          </p>
          <h2 className="text-3xl font-semibold my-2">{posts.title}</h2>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="mb-4 sm:text-sm md:text-base">{posts.excerpt}</p>
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => router.push(`posts/${posts.slug.current}`)}
            className="py-6 px-10 rounded-md bg-indigo-500 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 transition duration-300"
          >
            View More
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PostComponents;