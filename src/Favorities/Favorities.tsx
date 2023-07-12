import { FC } from 'react';
import { useSelector } from 'react-redux';
import { MovieState } from '../Components/ReduxStore/favorities/interfaces';

interface IFavorities {
}

export const Favorities: FC<IFavorities> = () => {
    const favoriteMovies = useSelector(
        (state: MovieState) => state.favoriteMovies
      );
      console.log(favoriteMovies)
    return (
        <header>

            <h1>Count:</h1>
            <div>
            {favoriteMovies.map((movie) => (
                <img src={movie.Poster} alt="" />
            ))}
            </div>
        </header>
    )
};
