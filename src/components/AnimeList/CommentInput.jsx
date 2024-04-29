"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CommentInput = ({
  anime_mal_id,
  anime_title,
  user_email,
  user_name,
  rating,
}) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState("0.0");
  const [isCreated, setIsCreated] = useState(false);
  const [errorComment, setErrorComment] = useState("  ");
  const [errorRate, setErrorRate] = useState("  ");

  const router = useRouter();

  const handleInput = (event) => {
    setComment(event.target.value);
    setErrorComment("");
    setIsCreated(false);
  };

  const handleRating = (event) => {
    // const rating = event.target.value;

    // // Convert rating to float
    // const floatRating = parseFloat(rating);

    setRate(event.target.value);
    setErrorRate("");
    setIsCreated(false);

    // Check if the conversion is successful and it's a valid number
  };

  console.log(rating);

  const handlePosting = async (event) => {
    event.preventDefault();

    if (comment.length < 3 || isNaN(rate)) {
      // Display error message
      setErrorComment("*Comment must be at least 3 characters long");
      setComment("");
      setErrorRate(
        "*Please input a valid rating with decimal value from 1-5 (ex: 3.56)"
      );
      setRate("");
      return;
    }

    if (rate < 1 || rate > 5) {
      setErrorRate("*Please input a valid rating from 1-5");
      setRate("");
      return;
    }

    const data = {
      anime_mal_id,
      anime_title,
      user_email,
      user_name,
      comment,
      rating: rate,
    };

    const response = await fetch(`/api/v1/comment/${anime_mal_id}`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.isCreated) {
      setIsCreated(true);
      setComment("");
      setRate("");
      router.refresh();
    }
    return;
  };

  return (
    <div className="flex flex-col gap-2 text-color-secondary">
      {isCreated && (
        <div className="flex w-1/12 items-center justify-center rounded-md bg-color-primary px-2 py-4 text-color-secondary">
          <h2 className="text-color-secondary">Comment Sent!</h2>
        </div>
      )}
      <textarea
        onChange={handleInput}
        value={comment}
        className="h-32 w-full p-2 text-lg font-semibold"
      />
      <textarea
        onChange={handleRating}
        value={rating}
        className="h-[2.5rem] w-[6rem] p-2 text-lg font-semibold"
      />
      <p className="font-bold text-color-light ">
        The range of the rate you can give is 1.00-5.00
      </p>
      {errorComment && (
        <div className="py-4">
          <p className="text-color-light">{errorComment}</p>
        </div>
      )}
      {errorRate && (
        <div className="py-4">
          <p className="text-color-light">{errorRate}</p>
        </div>
      )}
      <button
        onClick={handlePosting}
        className="w-52 bg-color-primary px-3 py-2"
      >
        Post Comment
      </button>
    </div>
  );
};

export default CommentInput;
