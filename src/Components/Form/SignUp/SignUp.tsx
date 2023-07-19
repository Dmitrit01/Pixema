import { FC, useState } from 'react';
import { Typography } from '../../Typography/Typography';
import { Input } from '../Input/Input';
import { Primary } from '../../Buttons/Primary/Primary';
import { useAppContext } from '../../../Context/AppContext';
import './SignUp.scss';

interface ISignUp {
}

export const SignUp: FC<ISignUp> = () => {
    const {isDarkTheme} = useAppContext()

    const [name,setName] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [confirmPassword,setConfirmPassword] = useState<string>('')

    const handleName = (newValue:string)=>{
        setName(newValue.trim())
    }
    const handleEmail = (newValue:string)=>{
        setEmail(newValue.trim())
    }
    const handlePassword = (newValue:string)=>{
        setPassword(newValue.trim())
    }
    const handleConfirmPassword = (newValue:string)=>{
        setConfirmPassword(newValue.trim())
    }

    return (
        <>
            <form action="#" className={`sign-up ${isDarkTheme() && 'sign-up--light'} `}>
                <Typography content='Sign Up' color={isDarkTheme() ? '#000' : '#FFF'} type='H2'/>
                <div className="sign-up__box">
                     <Input 
                        title='Name' 
                        placeholder='Your name' 
                        type='text'
                        isFocus={true}
                        handleChange={handleName}
                        value={name}
                    />
                     <Input 
                        title='Email' 
                        placeholder='Your email' 
                        type='password'
                        handleChange={handleEmail}
                        value={email}
                     />
                     <Input 
                        title='Password' 
                        placeholder='Your password' 
                        type='text'
                        handleChange={handlePassword}
                        value={password}
                     />
                     <Input 
                        title='Confirm password' 
                        placeholder='Confirm password' 
                        type='password'
                        handleChange={handleConfirmPassword}
                        value={confirmPassword}
                     />
                </div>
                <Primary content='Sign up'/>
                <p className='sign-up__accaunt'>Already have an account?<a href="/#"> Sign Ip</a></p>
            </form>
        </>
    )
};
