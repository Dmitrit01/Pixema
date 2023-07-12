import { FC } from 'react';
import './Secondary.scss';

interface ISecondary {
    content:string;
    isDisabled?:boolean;
}

export const Secondary: FC<ISecondary> = ({content,isDisabled=false}) => {
    const buttonSecondary = `secondary ${isDisabled && 'disabled'}`
    return (
        <button className={buttonSecondary} disabled={isDisabled}>{content}</button>
    )
};
