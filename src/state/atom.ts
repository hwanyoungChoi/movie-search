import { atom, AtomEffect, DefaultValue } from 'recoil';
import { Movie } from '../types/movie.ts';

export const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = window.localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue) => {
      if (newValue instanceof DefaultValue) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };

export const favoritesMoviesState = atom({
  key: 'favoritesMoviesState',
  default: [],
  effects_UNSTABLE: [localStorageEffect<Movie[]>('favoritesMoviesState')],
});
