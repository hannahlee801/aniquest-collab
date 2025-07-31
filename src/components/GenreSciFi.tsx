import SmallerAnimeCard from "./SmallerAnimeCard";
import { useEffect, useState } from "react";

type GenreSciFiAnimeResponse = {
  id: string;
  attributes: {
    posterImage: {
      small: string;
    };
    canonicalTitle: string;
    averageRating: string;
    favoritesCount: string;
    ageRating: string;
    startDate: string;
  };
};

function GenreSciFiAnime() {
  const [animes, setAnimes] = useState<GenreSciFiAnimeResponse[]>([]);

  useEffect(() => {
    const fetchGenreAnime = async () => {
      try {
        const response = await fetch(
          "https://kitsu.io/api/edge/anime?filter[categories]=scifi",
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_KITSU_AUTH_TOKEN}`,
            },
          },
        );
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json: GenreDramaSciFiResponse = await response.json();
        setAnimes(json.data);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    fetchGenreAnime();
  }, []);

  return (
    <div className="flex space-x-3">
      {animes &&
        animes.slice(0,4).map((anime) => (
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

export default GenreSciFiAnime;