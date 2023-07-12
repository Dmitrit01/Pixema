import { createStore } from 'redux';
import { AddFavoriteMovieAction, MovieState } from './interfaces';

const initialState: MovieState = {
  favoriteMovies: [],
};

const movieReducer = (
  state = initialState,
  action: AddFavoriteMovieAction
): MovieState => {
  switch (action.type) {
    case 'ADD_FAVORITE_MOVIE':
       return {
          ...state,
          favoriteMovies: [...state.favoriteMovies, action.movie],
        };
    default:
      return state;
  }
};

export const store = createStore(movieReducer);