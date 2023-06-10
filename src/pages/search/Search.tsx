import * as S from './Search.styled.ts';
import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from 'react';
import { Movie } from '../../types/movie.ts';
import Dialog from '../../components/Dialog';
import { useRecoilState } from 'recoil';
import { favoritesMoviesState } from '../../state/atom.ts';
import MovieListItem from '../../components/MovieListItem';

const MockMovies: Movie[] = [
  {
    Title: 'Iron Man',
    Year: '2008',
    imdbID: 'tt0371746',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
  },
  {
    Title: 'Iron Man 3',
    Year: '2013',
    imdbID: 'tt1300854',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Iron Man 2',
    Year: '2010',
    imdbID: 'tt1228705',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZGVkNDAyM2EtYzYxYy00ZWUxLTgwMjgtY2VmODE5OTk3N2M5XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'The Iron Giant',
    Year: '1999',
    imdbID: 'tt0129167',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYzBjZTNkMzQtZmNkOC00Yzk0LTljMjktZjk3YWVlZjY3NTk2XkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg',
  },
  {
    Title: 'The Man in the Iron Mask',
    Year: '1998',
    imdbID: 'tt0120744',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZjM2YzcxMmQtOTc2Mi00YjdhLWFlZjUtNmFmMDQzYzU2YTk5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Iron Fist',
    Year: '2017–2018',
    imdbID: 'tt3322310',
    Type: 'series',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjI5Mjg1NDcyOV5BMl5BanBnXkFtZTgwMjAxOTQ5MTI@._V1_SX300.jpg',
  },
  {
    Title: 'The Iron Lady',
    Year: '2011',
    imdbID: 'tt1007029',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BODEzNDUyMDE3NF5BMl5BanBnXkFtZTcwMTgzOTg3Ng@@._V1_SX300.jpg',
  },
  {
    Title: 'Iron Sky',
    Year: '2012',
    imdbID: 'tt1034314',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM2MDg5MzgxNF5BMl5BanBnXkFtZTcwODUzNjMxOA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Man with the Iron Fists',
    Year: '2012',
    imdbID: 'tt1258972',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTg5ODI3ODkzOV5BMl5BanBnXkFtZTcwMTQxNjUwOA@@._V1_SX300.jpg',
  },
  {
    Title: '3-Iron',
    Year: '2004',
    imdbID: 'tt0423866',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYzBmODdkMzItNTk0NS00MDc5LWFmZjgtNmNlZmNhMzFlMmQ3XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_SX300.jpg',
  },
];

export default function SearchPage() {
  const [keyword, setKeyword] = useState<string>('');
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie>();

  const [favoritesMovies, setFavoritesMovies] =
    useRecoilState(favoritesMoviesState);

  const isFavoritesBySelectedMovie = useMemo(() => {
    return favoritesMovies.some(
      (movie) => movie.imdbID === selectedMovie?.imdbID,
    );
  }, [favoritesMovies, selectedMovie?.imdbID]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value.trim());
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!keyword) {
      window.alert('검색어를 입력해주세요.');
      return;
    }

    // TODO: API 요청
    console.log('submit');
  };

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

      {MockMovies.length ? (
        <S.MovieList>
          {MockMovies.map((movie) => (
            <MovieListItem
              key={movie.imdbID}
              onClick={() => handleMovieItemClick(movie)}
              movie={movie}
            />
          ))}
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
    </>
  );
}
