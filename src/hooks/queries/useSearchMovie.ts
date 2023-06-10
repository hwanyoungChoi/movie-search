import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { ListResponse } from '../../types/api.ts';
import { Movie } from '../../types/movie.ts';

export interface SearchMovieRequest {
  search: string;
  page: number;
}

export type SearchMovieResponse = ListResponse<Movie>;

const searchMovie = async (
  params: SearchMovieRequest,
): Promise<SearchMovieResponse> => {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=92e32667&s=${params.search}&page=${params.page}`,
  );
  const data = await res.json();
  return data;
};

export default function useSearchMovie(
  params: SearchMovieRequest,
  options: UseQueryOptions<SearchMovieResponse, any>,
) {
  return useQuery<SearchMovieResponse, any>(
    ['search-movie'],
    () => searchMovie(params),
    {
      ...options,
    },
  );
}
