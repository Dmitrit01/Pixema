import { FC} from 'react';
import { SearchFilms } from '../SearchFilms/SearchFilms';
import { UserInfo } from '../UserInfo/UserInfo';
import { Burger } from '../Burger/Burger';
import { Logo } from '../Logo/Logo';
import './Header.scss';
import { isDisabled } from '@testing-library/user-event/dist/utils';


interface IHeader {
    handleMoveMain:()=>void;
    handleFilterMovie:()=>void
    titleFilm:any;
    isOpen:boolean;
    moveMain:boolean
}

export const Header: FC<IHeader> = ({titleFilm,handleMoveMain,handleFilterMovie,isOpen,moveMain}) => {
    return (
        <header className='header'>
            <div className="header__logo">
                <Logo/>
            </div>
            <SearchFilms titleFilm={titleFilm} handleFilterMovie={handleFilterMovie} moveMain={moveMain}/>
            <Burger handleMoveMain={handleMoveMain} isOpen={isOpen}/>
            <UserInfo userName='Dmitry Mekhedov'/>
        </header>
    )
};
