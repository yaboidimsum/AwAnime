"use client";

import { FileSearch } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-row items-center justify-center gap-4">
          <FileSearch size={32} className="text-color-primary" />
          <h1 className="text-3xl font-semibold text-color-primary">
            404 - Page Not Found
          </h1>
        </div>
        <button
          onClick={() => router.back()}
          className="text-white rounded-md bg-color-primary px-6 py-3 font-medium transition ease-in-out hover:bg-color-light hover:text-color-primary"
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default Page;
