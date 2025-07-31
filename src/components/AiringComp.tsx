import AnimeCard from "./AnimeCard";
import { useEffect, useState } from "react";

type AiringResponse = {
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
    status: string;
  };
};

function AiringComp() {
  const [animes, setAnimes] = useState<AiringResponse[]>([]);

  useEffect(() => {
    const fetchAiringAnime = async () => {
      try {
        const response = await fetch(
          "https://kitsu.io/api/edge/anime?filter[status]=current&page[limit]=20",
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_KITSU_AUTH_TOKEN}`,
            },
          },
        );
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json: AiringResponse = await response.json();
        setAnimes(json.data);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    fetchAiringAnime();
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

export default AiringComp;