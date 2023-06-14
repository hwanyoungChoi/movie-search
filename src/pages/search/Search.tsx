import * as S from './Search.styled.ts';
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Movie } from 'types/movie.ts';
import Dialog from 'components/Dialog';
import { useRecoilState } from 'recoil';
import { favoritesMoviesState } from 'state/atom.ts';
import MovieListItem from 'components/MovieListItem';
import useSearchMovieInfinite from 'hooks/queries/useSearchMovieInfinite.ts';
import queryClient from 'lib/queryClient.ts';
import { useInView } from 'react-intersection-observer';
import Loader from 'components/Loader';

export default function SearchPage() {
  const [keyword, setKeyword] = useState<string>('');
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie>();

  const [favoritesMovies, setFavoritesMovies] =
    useRecoilState(favoritesMoviesState);

  const {
    data,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useSearchMovieInfinite(keyword, {
    enabled: false,
  });
  const [movies, setMovies] = useState<Movie[]>();

  const { ref: listTailRef } = useInView({
    onChange: async (inView) => {
      if (inView && hasNextPage) {
        await fetchNextPage();
      }
    },
  });

  useEffect(() => {
    return () => queryClient.removeQueries(['search-movie']);
  }, []);

  useEffect(() => {
    if (data?.pages?.[0].Response === 'False') {
      window.alert(data?.pages[0].Error);
      setMovies([]);
      return;
    }

    setMovies(data?.pages.flatMap((page) => page.Search).filter(Boolean));
  }, [data]);

  const isFavoritesBySelectedMovie = useMemo(() => {
    return favoritesMovies.some(
      (movie) => movie.imdbID === selectedMovie?.imdbID,
    );
  }, [favoritesMovies, selectedMovie?.imdbID]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      if (!keyword) {
        window.alert('검색어를 입력해주세요.');
        return;
      }

      await refetch();
    },
    [keyword, refetch],
  );

  const handleMovieItemClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsOpenDialog(true);
  };

  const addFavorites = useCallback(
    (movie: Movie) => {
      setFavoritesMovies((prev) => [...prev, movie]);
    },
    [setFavoritesMovies],
  );

  const removeFavorites = useCallback(
    (movie: Movie) => {
      setFavoritesMovies((prev) =>
        prev.filter((item) => item.imdbID !== movie.imdbID),
      );
    },
    [setFavoritesMovies],
  );

  const handleFavoritesUpdateButtonClick = useCallback(() => {
    if (!selectedMovie) {
      return;
    }

    if (isFavoritesBySelectedMovie) {
      removeFavorites(selectedMovie);
    } else {
      addFavorites(selectedMovie);
    }

    setIsOpenDialog(false);
  }, [
    addFavorites,
    isFavoritesBySelectedMovie,
    removeFavorites,
    selectedMovie,
  ]);

  return (
    <>
      <S.Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={keyword}
          onChange={handleInputChange}
          placeholder="검색어 입력"
        />
        <button type="button" onClick={handleSubmit}>
          검색
        </button>
      </S.Form>

      {movies?.length ? (
        <S.MovieList>
          {movies.map((movie: Movie) => (
            <MovieListItem
              key={movie.imdbID}
              onClick={() => handleMovieItemClick(movie)}
              movie={movie}
              isFavorites={favoritesMovies.some(
                (favoritesMovie) => favoritesMovie.imdbID === movie.imdbID,
              )}
            />
          ))}
          <S.Target ref={listTailRef} />
        </S.MovieList>
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}

      <Dialog isOpen={isOpenDialog}>
        <S.DialogContent>
          <strong>{selectedMovie?.Title}</strong>
          <div>
            <button type="button" onClick={handleFavoritesUpdateButtonClick}>
              {isFavoritesBySelectedMovie ? '즐겨찾기 제거' : '즐겨찾기 추가'}
            </button>
            <button type="button" onClick={() => setIsOpenDialog(false)}>
              취소
            </button>
          </div>
        </S.DialogContent>
      </Dialog>

      {(isFetching || isFetchingNextPage) && <Loader />}
    </>
  );
}
