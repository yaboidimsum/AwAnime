"use client";

import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
  const router = useRouter();

  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="mb-4 flex items-center justify-between">
      <button className="text-color-light " onClick={handleBack}>
        <ArrowSquareLeft size={32} />
      </button>
      <h3 className="text-2xl font-bold text-color-light">{title}</h3>
    </div>
  );
};

export default Header;
