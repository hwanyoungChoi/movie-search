import * as S from './Favorites.styled.ts';
import { useRecoilState } from 'recoil';
import { favoritesMoviesState } from 'state/atom.ts';
import MovieListItem from 'components/MovieListItem';
import { useCallback, useState } from 'react';
import { Movie } from 'types/movie.ts';
import Dialog from 'components/Dialog';

export default function FavoritesPage() {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie>();

  const [favoritesMovies, setFavoritesMovies] =
    useRecoilState(favoritesMoviesState);

  const handleMovieItemClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsOpenDialog(true);
  };

  const handleFavoritesRemoveButtonClick = useCallback(() => {
    setFavoritesMovies((prev) =>
      prev.filter((item) => item.imdbID !== selectedMovie?.imdbID),
    );
    setIsOpenDialog(false);
  }, [selectedMovie?.imdbID, setFavoritesMovies]);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number,
  ) => {
    e.dataTransfer.setData('text/plain', index.toString());
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();

    const sourceIndex = parseInt(e.dataTransfer.getData('text/plain'));

    const updatedMovies = [...favoritesMovies];
    const [removedItem] = updatedMovies.splice(sourceIndex, 1);
    updatedMovies.splice(index, 0, removedItem);

    setFavoritesMovies(updatedMovies);
  };

  return (
    <S.Container>
      <S.Title>내 즐겨찾기</S.Title>

      {favoritesMovies.length ? (
        <S.MovieList>
          {favoritesMovies.map((movie, index) => (
            <MovieListItem
              key={movie.imdbID}
              movie={movie}
              isFavorites
              onClick={() => handleMovieItemClick(movie)}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
            />
          ))}
        </S.MovieList>
      ) : (
        <div>즐겨찾기 한 영화가 없습니다.</div>
      )}

      <Dialog isOpen={isOpenDialog}>
        <S.DialogContent>
          <strong>{selectedMovie?.Title}</strong>
          <div>
            <button type="button" onClick={handleFavoritesRemoveButtonClick}>
              즐겨찾기 제거
            </button>
            <button type="button" onClick={() => setIsOpenDialog(false)}>
              취소
            </button>
          </div>
        </S.DialogContent>
      </Dialog>
    </S.Container>
  );
}
