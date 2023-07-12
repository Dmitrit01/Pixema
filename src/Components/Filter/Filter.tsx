import { FC } from 'react';
import './Filter.scss';

interface IFilter {
    handleFilterMovie:()=>void
    isOpen:boolean;
    moveMain:boolean;
}

export const Filter: FC<IFilter> = ({handleFilterMovie,isOpen,moveMain}) => {
    const filter = `filter && ${!isOpen && 'filter__active'} ${moveMain && 'filter__none'}`;
    return (
        <>
            <div className = {filter}>
                <div className="filter__bg">
                    
                </div>
                <div className="filter__settings">
                    <div className="filter__close-box">
                        <button className="filter__close" onClick={handleFilterMovie} >
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                        
                </div>
             </div>
             
        </>
        
    )
};
