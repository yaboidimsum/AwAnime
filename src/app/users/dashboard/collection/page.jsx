import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";
import prisma from "@/libs/prisma";
import { authUserSession } from "@/libs/auth-libs";
import { useRouter } from "next/navigation";
import DeleteCollection from "@/components/Dashboard/Collection/DeleteCollection";

const Page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: {
      user_email: user.email,
    },
  });

  console.log(collection);

  return (
    <section className="mt-4 w-full px-4">
      <Header title={"My Collection"} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {collection.map(async (collect, index) => {
          return (
            <div className="flex flex-col gap-4">
              <Link
                key={index}
                href={`/anime/${collect.anime_mal_id}`}
                className="relative"
              >
                <Image
                  src={collect.anime_image}
                  alt={collect.anime_image}
                  width={300}
                  height={300}
                  className="w-full"
                />
                <div className="absolute bottom-0 flex h-16 w-full items-center justify-center bg-color-primary ">
                  <h5 className="text-center text-xl text-color-light">
                    {collect.anime_title}
                  </h5>
                </div>
              </Link>
              <DeleteCollection id={collect.id} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
