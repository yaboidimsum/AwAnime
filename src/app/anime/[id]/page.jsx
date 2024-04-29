import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/YoutubePlayer";
import Image from "next/image";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";

const Page = async ({ params: { id } }) => {
  const animeDetail = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });

  // console.log(collection);

  return (
    <>
      <div className="px-4 pt-8">
        <div className="flex flex-row items-center gap-8">
          <h2 className="text-2xl text-color-light">
            {animeDetail.data.title} - {animeDetail.data.year}
          </h2>
          {!collection && user && (
            <CollectionButton
              anime_mal_id={id}
              user_email={user?.email}
              anime_image={animeDetail.data.images.webp.image_url}
              anime_title={animeDetail.data.title}
            />
          )}
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto px-4 pt-4 text-color-light">
        <div className="border-color-white flex w-[9rem] flex-col items-center justify-center rounded-md border p-4">
          <h3>Peringkat</h3>
          <p>{animeDetail.data?.rank}</p>
        </div>
        <div className="border-color-white flex w-[9rem] flex-col items-center justify-center rounded-md border p-4">
          <h3>Skor</h3>
          <p>{animeDetail.data?.score}</p>
        </div>
        <div className="border-color-white flex w-[9rem] flex-col items-center justify-center rounded-md border p-4">
          {animeDetail.data?.episodes !== 1 ? (
            <>
              <h3>Episode</h3>
              <p>{animeDetail.data?.episodes}</p>{" "}
            </>
          ) : (
            <h2>Film</h2>
          )}
        </div>
        <div className="border-color-white flex w-[9rem] flex-col items-center justify-center rounded-md border p-4">
          <h3>Members</h3>
          <p>{animeDetail.data?.members}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 px-4 pt-8 text-color-light sm:flex-nowrap">
        <Image
          src={animeDetail.data.images.webp.image_url}
          alt={animeDetail.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />
        <p className="text-md text-justify sm:text-lg  ">
          {animeDetail.data.synopsis}
        </p>
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-2xl text-color-light">What people say!</h3>
        <CommentBox anime_mal_id={id} />
        {user && (
          <CommentInput
            anime_mal_id={id}
            anime_title={animeDetail.data.title}
            user_email={user?.email}
            user_name={user?.name}
          />
        )}
      </div>
      <div>
        <VideoPlayer youtubeId={animeDetail.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
