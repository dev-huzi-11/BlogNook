import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("Incoming data:", data); 
    const { name, email, comment, postId } = data;

    if (!name || !email || !comment || !postId) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Sanity database interaction
    const newComment = await client.create({
      _type: "comment",
      name,
      email,
      comment,
      post: {
        _type: "reference",
        _ref: postId,
      },
    });

    console.log("Comment created successfully:", newComment);
    return NextResponse.json(
      { message: "Comment added successfully", comment: newComment },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating comment:", error); 
    return NextResponse.json(
      { message: "Failed to create a comment", error: error.message },
      { status: 500 }
    );
  }
}
