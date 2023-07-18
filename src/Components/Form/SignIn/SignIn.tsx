import { FC,KeyboardEvent, useState } from 'react';
import { Input } from '../Input/Input';
import { Typography } from '../../Typography/Typography';
import { Primary } from '../../Buttons/Primary/Primary';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../../Context/AppContext';
import './SignIn.scss';

interface ISignIn {
}

export const SignIn: FC<ISignIn> = () => {
    const{isDarkTheme}=useAppContext()

    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const handleEmail = (newValue:string)=>{
        setEmail(newValue)
    }
    const handlePassword = (newValue:string)=>{
        setPassword(newValue)
    }
   
    return (
        <>
            <form action="#" className={`sign-in ${isDarkTheme() && 'sign-in--light' }`}>
                <Typography content='Sign In' color={isDarkTheme() ? '#000' : '#fff'} type='H2'/>
                <div className="sign-in__box">
                     <Input 
                        title='Email' 
                        placeholder='Your email' 
                        type='text'
                        isFocus={true}
                        handleChange={handleEmail}
                        value={email}
                     />
                     <Input 
                        title='Password' 
                        placeholder='Your password' 
                        type='password'
                        handleChange={handlePassword}
                        value={password}
                     />
                </div>
                <Link to={'/form/reset-password'}><p className='sign-in__forgot'>Forgot password?</p></Link>
                <Primary content='Sign in'/>
                <p className='sign-in__accaunt'>Don’t have an account?<Link to={'/form/sign-up'}>Sign Up</Link></p>
            </form>
        </>
        
    )
};
