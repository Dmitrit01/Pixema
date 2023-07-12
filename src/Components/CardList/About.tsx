import { FC } from 'react';


interface IAbout {
}

export const ComponentAbout: FC<IAbout> = () => {
    const h2 ={
        color:'white'
    }
    return (
        <h2 style={h2}>СSS About</h2>
    )
};

