import { FC,useState,useEffect } from 'react';
import { BASE_URL } from '../../../api/url';
import { Card } from '../../Card/Card';
import './BoardOneFilm.scss';

interface IBoardOneFilm {
    titleMovie:string
    from:number
    to:number
}

export const BoardOneFilm: FC<IBoardOneFilm> = ({titleMovie,from,to}) => {
    const[movie,setMovie] = useState([])
   
    useEffect(()=>{
       const fetchMovie = async() =>{
                const URL =  `${BASE_URL}?s=${titleMovie}&apikey=7eb1591a`
                const response = await fetch(URL)
                const Data = await response.json()
                const finalData = Data.Search
                setMovie(finalData)
                console.log(finalData)
        }
        fetchMovie()
    },[titleMovie])
    const oneFilm = movie.slice(from,to)
    return (
        <div className='board-one-film'>
            {movie && oneFilm.map((item)=>
                <Card 
                    image={item['Poster']} 
                    titleFilm={item['Title']} 
                    yearFilm={item['Year']}
                />
            )}
        </div>
    )
};
