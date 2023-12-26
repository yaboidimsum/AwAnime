import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/YoutubePlayer";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const animeDetail = await getAnimeResponse(`anime/${id}`);

  console.log(animeDetail);

  return (
    <>
      <div className="px-4 pt-8">
        <h2 className="text-2xl text-color-light">
          {animeDetail.data.title} - {animeDetail.data.year}
        </h2>
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
      <div>
        <VideoPlayer youtubeId={animeDetail.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
