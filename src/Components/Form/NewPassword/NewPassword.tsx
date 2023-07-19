import { FC, useState } from 'react';
import { Typography } from '../../Typography/Typography';
import { Input } from '../Input/Input';
import { Primary } from '../../Buttons/Primary/Primary';
import './NewPassword.scss';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../../Context/AppContext';

interface INewPassword {
}

export const NewPassword: FC<INewPassword> = () => {
    const{isDarkTheme}=useAppContext()
    const [password,setPassword] = useState<string>('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const handlePassword = (newValue:string)=>{
        setPassword(newValue.trim())
    }
    const handleConfirmPassword = (newValue:string)=>{
        setConfirmPassword(newValue.trim())
    }

    return (
        <>
            <form action="#" className={`new-password ${isDarkTheme() && 'new-password--light'}`}>
                <Typography content='New password' color={isDarkTheme() ? '#000' : '#FFF'} type='H2'/>
                <div className="new-password__box">
                    <Input 
                        title='Password' 
                        placeholder='Your password' 
                        type='text'
                        value={password}
                        handleChange={handlePassword}
                    />
                    <Input 
                        title='Confirm password' 
                        placeholder='Confirm your password' 
                        type='password'
                        value={confirmPassword}
                        handleChange={handleConfirmPassword}
                    />
                </div>
                <Primary content='Sign in'/>
                <p className='new-password__accaunt'>Don’t have an account?<Link to={'/form/sign-up'}>Sign Up</Link></p>
            </form>
        </>
    )
};
