import Image from "next/image";
import Link from "next/link";

const Card = ({ api }) => {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:grid-cols-4">
      {api.data?.map((anime, index) => (
        <Link
          href={`/anime/${anime.mal_id}`}
          key={index}
          className="cursor-pointer text-color-light transition-all ease-in-out hover:text-color-primary"
        >
          <Image
            src={anime.images.webp.image_url}
            alt="..."
            width={350}
            height={350}
            className="max-h-64 w-full object-cover"
          />
          <h3 className="text-md p-4 font-bold md:text-xl">{anime.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Card;
