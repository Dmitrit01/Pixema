import { FC } from 'react';
import Rating  from '../../assets/rating/Path.png';
import { useAppContext } from '../../Context/AppContext';
import { Link } from 'react-router-dom';
import './Card.scss';

interface ICard {
    image:string;
    titleFilm:string
    yearFilm:string
    rating?:string
    id?:string
}

export const Card: FC<ICard> = ({image,titleFilm,yearFilm,rating='',id}) => {
    const{isDarkTheme}=useAppContext()
    return (
        <>
            <div className='card'>
                <div className="card__body">
                    <div className="card__img-box">
                        <Link to={`/Movies/${id}`}> <img  className="card__img" src={image} alt='film'/></Link>
                        {rating && <div className="card__img-box-rating"><img src={Rating} alt='rating'/><p>{rating}</p></div>}
                    </div>
                    <div className="card__info">
                        <h2 className={isDarkTheme()?'card__title--dark':'card__title--light'}>{titleFilm}</h2>
                        <p className={isDarkTheme()?'card__year--dark':'card__year--light'}>{yearFilm}</p>
                    </div> 
                </div> 
            </div>
       
        </>
       
    )
};
