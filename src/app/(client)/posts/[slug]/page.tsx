"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Lilita_One } from "next/font/google";
import AddComments from "@/components/AddComments";
import GetAllComments from "@/components/GetAllComments";

const lilitaFont = Lilita_One({ weight: "400", subsets: ["latin"] });

const myPortableTextComponents = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold text-black dark:text-white my-6">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 my-6">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 my-4">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-semibold">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 my-6 text-lg text-gray-800 dark:text-gray-300">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-6 my-6 text-gray-800 dark:text-gray-300">
        {children}
      </ol>
    ),
  },
  types: {
    image: ({ value }: { value: SanityImageSource & { alt?: string } }) => {
      const imageUrl = urlFor(value)?.url();
      if (!imageUrl) return null;
      return (
        <Image
          src={imageUrl}
          alt={value.alt || "Blog Image"}
          className="rounded-lg my-4 w-full h-auto"
          width={1200}
          height={800}
          priority
        />
      );
    },
  },
};

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug] {
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    _id
  }[0]`;

  const postData = await client.fetch(query, { slug });

  if (postData) {
    const commentsQuery = `*[_type == "comment" && post._ref == $postId] {
      _id,
      name,
      comment,
      email,
      _createdAt
    }`;

    const comments = await client.fetch(commentsQuery, {
      postId: postData._id,
    });
    postData.comments = comments;

    return postData;
  }

  return null;
}

const BlogPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [post, setPost] = useState<any | null>(null);
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    };

    fetchParams();
  }, [params]);

  useEffect(() => {
    if (slug) {
      const fetchPost = async () => {
        const postData = await getPost(slug);
        setPost(postData);
      };

      fetchPost();
    }
  }, [slug]);

  if (!post)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
          Loading...
        </h1>
      </div>
    );

  return (
    <div className="w-full px-4 py-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <CardHeader>
            <div className="flex flex-col items-center text-center space-y-4">
              <h1
                className={`text-5xl font-bold max-w-3xl ${lilitaFont.className} text-gray-900 dark:text-white`}
              >
                {post.title}
              </h1>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Published on {new Date(post.publishedAt).toDateString()}
              </span>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-8">
            <PortableText
              value={post.body}
              components={myPortableTextComponents}
            />
          </CardContent>
          <CardFooter className="w-full flex flex-col gap-y-20">
            <AddComments postId={post?._id} />
            <GetAllComments comments={post?.comments || []} />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default BlogPage;
