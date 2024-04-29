"use client";

import { useState } from "react";

const CollectionButton = ({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
}) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (event) => {
    event.preventDefault();

    const data = {
      anime_mal_id,
      user_email,
      anime_image,
      anime_title,
    };

    const response = await fetch(`/api/v1/collection/$[id]`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await response.json();

    if (result.isCreated) {
      setIsCreated(true);
    }
    return;
  };

  return (
    <>
      {isCreated ? (
        <div className="rounded-md bg-color-secondary px-4 py-2 font-semibold text-color-light">
          Already Added to Collection
        </div>
      ) : (
        <button
          onClick={handleCollection}
          className="rounded-md bg-color-light px-4 py-2 transition ease-in-out hover:bg-color-primary hover:text-color-light"
        >
          <h2>Add to Collection</h2>
        </button>
      )}
    </>
  );
};

export default CollectionButton;
