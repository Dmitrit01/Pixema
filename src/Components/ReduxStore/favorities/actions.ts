import { ADD_FAVORITE_MOVIE } from "./actionsTypes";
import { AddFavoriteMovieAction, Movie } from "./interfaces";


export const addToFavorites = (movie: Movie): AddFavoriteMovieAction => ({
    type: ADD_FAVORITE_MOVIE,
    movie:movie
});