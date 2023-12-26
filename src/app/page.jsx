import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );

  recommendedAnime = reproduce(recommendedAnime, 8);
  return (
    <>
      <section>
        <Header title="Top Anime" linkHref="/populer" linkTitle="Lihat Semua" />
        <div>
          <AnimeList api={topAnime} />
        </div>
      </section>
      <section>
        <Header title="Rekomendasi" />
        <div>
          <AnimeList api={recommendedAnime} />
        </div>
      </section>
    </>
  );
};

export default Page;
