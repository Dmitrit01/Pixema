import { FC } from 'react';
import './Primary.scss';

interface IPrimary {
    content:string;
    isDisabled?:boolean;
}

export const Primary: FC<IPrimary> = ({content,isDisabled=false}) => {
    const buttonPrimary = `primary ${isDisabled && 'disabled'}`
    return (
        <button className={buttonPrimary} disabled={isDisabled}>{content}</button>
    )
};
