import { useEffect, useState } from "react";
import apiClient, { CanceledError} from "../services/api-client";

// export interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

// export interface Game {
//   id: number;
//   name: string;
//   background_image: string;
//   parent_platforms: { platform: Platform }[];
//   metacritic: number;
// }

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

interface Genre {
  id: number;
  name: string;
}

const useGenres = () => {
    const [genres, setGenres] = useState<genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)
  
    useEffect(() => {
      const controller =new AbortController();

      setIsLoading(true);
      apiClient.get<FetchGenresResponse>("/genres", { signal: controller.signal})
        .then((res) => {
          setGenres(res.data.results);
          setIsLoading(false);
        })
        .catch(err => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });

        return () => controller.abort();
    }, []);

    return {
      error,
      genres,
      isLoading
    }
}

export default useGenres;