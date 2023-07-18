import { FC, useState } from 'react';
import { Typography } from '../../Typography/Typography';
import { Input } from '../Input/Input';
import { Primary } from '../../Buttons/Primary/Primary';
import { useAppContext } from '../../../Context/AppContext';
import './ResetPassword.scss';

interface IResetPassword {
}

export const ResetPassword: FC<IResetPassword> = () => {
    const{isDarkTheme}=useAppContext()
    
    const [email,setEmail] = useState<string>('')
    const handleEmail = (newValue:string)=>{
        setEmail(newValue)
    }

    return (
        <>
        <form action="#" className={`reset-password ${isDarkTheme() && 'reset-password--light'}`}>
            <Typography content='Reset password' color={isDarkTheme() ? '#000' : '#FFF'} type='H2'/>
            <div className="reset-password__box">
                 <Input 
                    title='Email' 
                    placeholder='Your email' 
                    type='text'
                    isFocus = {true}
                    handleChange={handleEmail}
                    value={email}
                />
            </div>
            <Primary content='Reset'/>
        </form>
    </>
    )
};
