"use client";

import { useRouter } from "next/navigation";

const DeleteComment = ({ id }) => {
  const router = useRouter();

  const handleCollection = async (event) => {
    event.preventDefault();

    const data = {
      id,
    };

    const response = await fetch(`/api/v1/collection/${id}`, {
      method: "DELETE",
      body: JSON.stringify(data),
    });

    router.refresh();
  };

  return (
    <div>
      <button
        onClick={handleCollection}
        className="w-full rounded-md bg-color-light px-4 py-2 transition ease-in-out hover:bg-color-primary hover:text-color-light"
      >
        Remove
      </button>
    </div>
  );
};

export default DeleteComment;
