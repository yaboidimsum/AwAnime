"use client";

import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [populerAnime, setPopulerAnime] = useState([]);

  const fetchData = async () => {
    const data = await getAnimeResponse("top/anime", `page=${page}`);
    setPopulerAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <HeaderMenu title={`POPULAR ANIME #${page}`} />
      <AnimeList api={populerAnime} />
      <Pagination
        page={page}
        lastPage={populerAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </div>
  );
};

export default Page;
