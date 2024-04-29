"use client";

import { useRouter } from "next/navigation";

const DeleteComment = ({ id }) => {
  const router = useRouter();

  const handleComment = async (event) => {
    event.preventDefault();

    const data = {
      id,
    };

    const response = await fetch(`/api/v1/comment/${id}`, {
      method: "DELETE",
      body: JSON.stringify(data),
    });

    router.refresh();
  };

  return (
    <div>
      <button
        onClick={handleComment}
        className="rounded-md bg-color-light px-4 py-2 transition ease-in-out hover:bg-color-primary hover:text-color-light"
      >
        Delete Comment
      </button>
    </div>
  );
};

export default DeleteComment;
