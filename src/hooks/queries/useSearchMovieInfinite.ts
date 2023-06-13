import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
} from '@tanstack/react-query';
import { ListResponse } from '../../types/api.ts';
import { Movie } from '../../types/movie.ts';

export type SearchMovieResponse = ListResponse<Movie>;

const searchMovie = async (keyword: string, page: number) => {
  const res = await fetch(
    `${
      import.meta.env.VITE_API_HOST
    }?apikey=92e32667&s=${keyword}&page=${page}`,
  );
  return await res.json();
};

export default function useSearchMovieInfinite(
  keyword: string,
  options: UseInfiniteQueryOptions<SearchMovieResponse>,
): UseInfiniteQueryResult<SearchMovieResponse> {
  return useInfiniteQuery<SearchMovieResponse>(
    ['search-movie'],
    ({ pageParam }) => searchMovie(keyword, pageParam ?? 1),
    {
      ...options,
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.Response === 'True') {
          return allPages.length + 1;
        }
        return undefined;
      },
    },
  );
}
