import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getMovieId } from '../../api/getMovie';
import { addToFavorites } from "../ReduxStore/favorities/actions";
import './MovieFull.scss';

export interface IMovie {
  Actors:string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings:any []
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}
  
  export const MovieFull: React.FC = () => {
    const [movie, setMovie] = useState<IMovie|null>(null);
    const { id } = useParams<{ id: string }>();
    
    useEffect(() => {
      const fetchMovie = async () => {
        if (id !== undefined) {
          const data = await getMovieId(id);
          console.log(data)
          setMovie(data);
        }
      };
      fetchMovie();
    },[id]);

    const dispatch = useDispatch()
    const handleAddToFavorites = () => {
      if (movie) {
        dispatch(addToFavorites(movie));
      }
    };

    return (
      <div>
        {movie && (
          <img src={movie.Poster} alt={movie.Title} />
        )}
        <button onClick={handleAddToFavorites}>Добавить</button>
      </div>
    );
  };