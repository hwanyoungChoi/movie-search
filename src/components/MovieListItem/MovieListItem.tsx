import * as S from './MovieListItem.styled.ts';
import { Movie } from '../../types/movie.ts';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  movie: Movie;
  onClick: () => void;
  isFavorites: boolean;
}

export default function MovieListItem({
  movie,
  onClick,
  isFavorites,
  ...props
}: Props) {
  return (
    <S.Container onClick={onClick} {...props}>
      <img src={movie.Poster} />
      <S.MovieDescription>
        <div>
          <strong>{movie.Title}</strong>
          <div>{movie.Year}</div>
          <div>{movie.Type}</div>
        </div>
        {isFavorites && <div>❤️</div>}
      </S.MovieDescription>
    </S.Container>
  );
}
