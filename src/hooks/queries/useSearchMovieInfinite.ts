import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
} from '@tanstack/react-query';
import { ListResponse } from 'types/api.ts';
import { Movie } from 'types/movie.ts';
import axiosInstance from 'lib/axios.ts';

export interface SearchMovieRequestParams {
  s: string;
  page: number;
}

export type SearchMovieResponse = ListResponse<Movie>;

const searchMovie = async (
  params: SearchMovieRequestParams,
): Promise<SearchMovieResponse> => {
  const res = await axiosInstance('', { params });
  return res.data;
};

export default function useSearchMovieInfinite(
  keyword: string,
  options: UseInfiniteQueryOptions<SearchMovieResponse>,
): UseInfiniteQueryResult<SearchMovieResponse> {
  return useInfiniteQuery<SearchMovieResponse>(
    ['search-movie'],
    ({ pageParam }) => searchMovie({ s: keyword, page: pageParam ?? 1 }),
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
