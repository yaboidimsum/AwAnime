"use client";

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-row items-center justify-center gap-4">
          <FileSearch size={32} className="text-color-primary" />
          <h1 className="text-3xl font-semibold text-color-primary">
            404 - Page Not Found
          </h1>
        </div>
        <Link href="/" className="px-6 py-3 bg-color-primary text-white font-medium hover:bg-color-light hover:text-color-primary transition ease-in-out rounded-md">
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default Page;
