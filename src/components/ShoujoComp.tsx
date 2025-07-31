import AnimeCard from "./AnimeCard";
import { useEffect, useState } from "react";

type ShoujoResponse = {
  id: string;
  attributes: {
    posterImage: {
      small: string;
    };
    canonicalTitle: string;
    averageRating: string;
    favoritesCount: string;
    ageRating: string;
    subtype: string;
  };
};

function ShoujoComp() {
  const [animes, setAnimes] = useState<ShoujoResponse[]>([]);

  useEffect(() => {
    const fetchShoujoAnime = async () => {
      try {
        const response = await fetch(
          "https://kitsu.io/api/edge/anime?filter[categories]=shoujo&page[limit]=20",
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_KITSU_AUTH_TOKEN}`,
            },
          },
        );
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json: ShoujoResponse = await response.json();
        setAnimes(json.data);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    fetchShoujoAnime();
  }, []);

  return (
    <>
      {animes &&
        animes.map((anime) => (
          <AnimeCard
            key={anime.id}
            id={anime.id}
            posterImage={anime.attributes.posterImage.small}
            canonicalTitle={anime.attributes.canonicalTitle}
            avgRating={anime.attributes.averageRating}
            favoritesCount={anime.attributes.favoritesCount}
            ageRating={anime.attributes.ageRating}
          />
        ))}
    </>
  );
}

export default ShoujoComp;