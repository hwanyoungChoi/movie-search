import * as S from './MovieListItem.styled.ts';
import { Movie } from '../../types/movie.ts';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  movie: Movie;
  onClick: () => void;
}

export default function MovieListItem({ movie, onClick, ...props }: Props) {
  return (
    <S.Container onClick={onClick} {...props}>
      <img src={movie.Poster} />
      <div>
        <strong>{movie.Title}</strong>
        <div>{movie.Year}</div>
        <div>{movie.Type}</div>
      </div>
    </S.Container>
  );
}
