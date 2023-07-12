import { FC, } from 'react';
import { Nav } from './Nav/Nav';
import { Logo } from '../Logo/Logo';
import './SideBar.scss';


interface ISideBar {
}

export const SideBar: FC<ISideBar> = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <Logo/>
            </div>
            <Nav/>
            <footer className='sidebar__footer'>
                <p>© All Rights Reserved</p>
            </footer>
        </div>
    )
};
