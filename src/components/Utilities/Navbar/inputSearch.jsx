"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  // useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
  const searchRef = useRef();
  // Router is a hook that allows you to get access to the router object.
  const router = useRouter();

  const handleSearch = (e) => {
    const keyword = searchRef.current.value;
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      !keyword || keyword.trim() == "" ? null : router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        className="w-full rounded-md p-2"
        type="text"
        placeholder="Cari Anime..."
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute end-3 top-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
