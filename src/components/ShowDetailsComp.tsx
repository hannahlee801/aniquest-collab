import ShowDetailsCard from "./ShowDetailsCard";
import { useEffect, useState } from "react";

type ShowDetailsCompResponse = {
  id: string;
  attributes: {
    posterImage: {
      small: string;
    };
    canonicalTitle: string;
    averageRating: string;
    favoritesCount: string;
    ageRating: string;
    episodeCount: number;
    episodeLength: number;
    synopsis: string;
  };
};

function showDetailsComp() {
  const [anime, setAnime] = useState<ShowDetailsCompResponse>();

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await fetch(
          "https://kitsu.io/api/edge/anime?filter[seasonYear]=2000,2001,2002,2003,2004,2005,2006,2007,2008,2009",
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_KITSU_AUTH_TOKEN}`,
            },
          },
        );
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json: ShowDetailsCompResponse = await response.json();
        setAnimes(json.data);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    fetchAnime();
  }, []);

  return (
    <div className="flex space-x-3">
      {anime &&
        anime.slice(0,4).map((anime) => (
          <SmallerAnimeCard
            key={anime.id}
            id={anime.id}
            posterImage={anime.attributes.posterImage.small}
            canonicalTitle={anime.attributes.canonicalTitle}
            avgRating={anime.attributes.averageRating}
            favoritesCount={anime.attributes.favoritesCount}
            ageRating={anime.attributes.ageRating}
          />
        ))}
    </div>
  );
}

export default Decade00sAnime;