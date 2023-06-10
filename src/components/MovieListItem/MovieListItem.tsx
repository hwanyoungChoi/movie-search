import * as S from './MovieListItem.styled.ts';
import { Movie } from '../../types/movie.ts';

interface Props {
  movie: Movie;
  onClick: () => void;
}

export default function MovieListItem({ movie, onClick }: Props) {
  return (
    <S.Container onClick={onClick}>
      <img src={movie.Poster} />
      <div>
        <strong>{movie.Title}</strong>
        <div>{movie.Year}</div>
        <div>{movie.Type}</div>
      </div>
    </S.Container>
  );
}
