import { FC,KeyboardEvent } from 'react';
import { Input } from '../Input/Input';
import { Typography } from '../../Typography/Typography';
import { Primary } from '../../Buttons/Primary/Primary';
import './SignIn.scss';




interface ISignIn {
}

export const SignIn: FC<ISignIn> = () => {
    
    return (
        <>
            <form action="#" className='sign-in'>
                <Typography content='Sign In' color='FFF' type='H2'/>
                <div className="sign-in__box">
                     <Input 
                        title='Email' 
                        placeholder='Your email' 
                        type='text'
                        isFocus={true}
                     />
                     <Input 
                        title='Password' 
                        placeholder='Your password' 
                        type='password'
                     />
                </div>
                <p className='sign-in__forgot'>Forgot password?</p>
                <Primary content='Sign in'/>
                <p className='sign-in__accaunt'>Don’t have an account?<a href="https://www.youtube.com/"> Sign Up</a></p>
            </form>
        </>
        
    )
};
