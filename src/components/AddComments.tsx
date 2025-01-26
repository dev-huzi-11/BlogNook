import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { FaComment } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  comment: string;
}

interface Props {
  postId: string;
}

const AddComments = ({ postId }: Props) => {
  const [message, setMessage] = useState<string | null>(null); // For success or error message
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const { name, email, comment } = data;

    console.log("Form Data:", { name, email, comment, postId });

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, comment, postId }),
      });

      const responseData = await res.json();

      if (!res.ok) {
        setMessage(`Failed to add comment: ${responseData.message}`);
        return;
      }

      console.log("Comment added successfully:", responseData);
      setMessage("Comment added successfully!");
      reset();
    } catch (err) {
      setMessage("Error submitting comment. Please try again.");
      console.error("Error submitting comment:", err);
    }
  };

  return (
    <div className="mt-10 w-full">
      <h2 className="text-lg font-semibold mt-5 mb-8 flex items-center gap-4">
        Leave a comment{" "}
        <span>
          <FaComment />
        </span>
      </h2>

      {/* Success or Error Message */}
      {message && (
        <p
          className={`text-sm ${message.includes("successfully") ? "text-green-600" : "text-red-600"} mt-2`}
        >
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            {...register("name", { required: "Name is required" })}
            className="w-full mt-1 dark:border-white/50"
          />
          {errors.name && (
            <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <Label htmlFor="email">
            Email{" "}
            <span className="text-xs ml-5">
              (Your email will not be published)
            </span>
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email",
              },
            })}
            className="w-full mt-1 dark:border-white/50"
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Comment Field */}
        <div>
          <Label htmlFor="comment">Comment</Label>
          <Textarea
            id="comment"
            {...register("comment", { required: "Drop a comment" })}
            rows={5}
            className="w-full mt-1 dark:border-white/50"
          />
          {errors.comment && (
            <p className="text-sm text-red-600 mt-1">
              {errors.comment.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 text-white ${isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"} rounded`}
        >
          {isSubmitting ? "Submitting..." : "Add Comment"}
        </Button>
      </form>
    </div>
  );
};

export default AddComments;
