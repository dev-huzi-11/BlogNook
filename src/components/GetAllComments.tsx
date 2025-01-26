import React from "react";
import { Comments } from "@/lib/interfaces";

interface Props {
  comments: Array<Comments>;
}

const GetAllComments = ({ comments }: Props) => {
  return (
    <div className="text-start w-full">
      <h3 className="text-2xl font-semibold">All Comments</h3>
      {comments?.length === 0 && <p>No comments yet.</p>}
      {comments?.map((comment) => {
        console.log(comment); // Log comment object to verify it has a valid _id
        return (
          <div key={comment._id} className="border-b border-gray-200/50 py-4 bg-gray-50 dark:text-white dark:bg-slate-700 px-4">
            <p className="text-xl my-2">
              <strong>{comment.name}</strong>{" "}
              <span className="text-gray-500 dark:text-gray-300 text-sm">
                {new Date(comment._createdAt).toLocaleString()}
              </span>
            </p>
            <p className="text-lg">{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GetAllComments;
