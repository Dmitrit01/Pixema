import { FC } from 'react';
import { useAppContext } from '../../../../Context/AppContext';
import './ToggleTheme.scss';



interface IToggleTheme {

}

export const ToggleTheme: FC<IToggleTheme> = () => {
    const{toggleTheme,isDarkTheme}=useAppContext()
    const handleToggleTheme =()=> {
        toggleTheme()
        console.log(isDarkTheme())
    }
    const buttonClass = `toggle-theme ${isDarkTheme() && 'active'}`
    return (
        <button className={buttonClass} onClick={handleToggleTheme}>
            <div className='circle'></div>
        </button>
    )
};
