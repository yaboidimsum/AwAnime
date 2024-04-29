import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <>
      <div className="mt-8 flex flex-col items-center justify-center gap-8 text-color-light">
        <h2 className="text-2xl font-bold">Welcome, {user?.name}</h2>
        <Image src={user?.image} alt={user?.name} width={200} height={200} />
        <div className="py-8 flex flex-wrap gap-8">
          <Link
            href="/users/dashboard/collection"
            className="bg-color-primary px-4 py-3 text-xl font-bold text-color-dark"
          >
            My collection
          </Link>
          <Link
            href="/users/dashboard/comment"
            className="bg-color-primary px-4 py-3 text-xl font-bold text-color-dark"
          >
            My comment
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
