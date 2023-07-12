import { FC } from 'react';
import { Typography } from '../../Typography/Typography';
import { Input } from '../Input/Input';
import { Primary } from '../../Buttons/Primary/Primary';
import './SignUp.scss';
interface ISignUp {
}

export const SignUp: FC<ISignUp> = () => {
    return (
        <>
            <form action="#" className='sign-up'>
                <Typography content='Sign Up' color='FFF' type='H2'/>
                <div className="sign-up__box">
                     <Input 
                        title='Name' 
                        placeholder='Your name' 
                        type='text'
                    />
                     <Input 
                        title='Email' 
                        placeholder='Your email' 
                        type='password'
                     />
                     <Input 
                        title='Password' 
                        placeholder='Your password' 
                        type='text'

                     />
                     <Input 
                        title='Confirm password' 
                        placeholder='Confirm password' 
                        type='password'
                     />
                </div>
                <Primary content='Sign up'/>
                <p className='sign-up__accaunt'>Already have an account?<a href="https://www.youtube.com/"> Sign Ip</a></p>
            </form>
        </>
    )
};
