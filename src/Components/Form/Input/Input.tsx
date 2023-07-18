import { FC,useEffect,useRef } from 'react';
import './Input.scss';
import { Typography } from '../../Typography/Typography';
import { useAppContext } from '../../../Context/AppContext';

interface IInput {
    title:string;
    placeholder:string;
    type:string;
    handleChange: (newValue: string) => void;
    value?:string;
    isDisabled?:boolean;
    isError?:boolean;
    isFocus?:boolean;
}

export const Input: FC<IInput> = ({
    title,
    placeholder,
    type,
    isDisabled=false,
    isError=false,
    isFocus=false,
    handleChange,
    value
}) => {
    const{isDarkTheme}=useAppContext()
    const inputClass = `box-input__input 
                        ${isDisabled && 'disabled'} 
                        ${isError && 'error'} 
                        ${isDarkTheme() ? 'box-input__input--light':'box-input__input--dark'}`;
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(()=>{
        if(inputRef.current && isFocus){
            inputRef.current.focus()
        }
    },[])
    
    return (
       <div className='box-input'>
            <Typography 
                content={title} 
                type='subline3' 
                color={isDarkTheme()?'#000':'#fff'}
            />
            <input 
                ref={inputRef}
                type={type} 
                className = {inputClass}
                placeholder={placeholder}
                disabled = {isDisabled}
                onChange={(e) => handleChange(e.target.value)}
                value={value}
            />
            {isError && <p className='error-text'>Error text</p>}
       </div>
    )
};
