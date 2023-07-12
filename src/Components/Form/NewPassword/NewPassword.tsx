import { FC } from 'react';
import { Typography } from '../../Typography/Typography';
import { Input } from '../Input/Input';
import { Primary } from '../../Buttons/Primary/Primary';
import './NewPassword.scss';
interface INewPassword {
}

export const NewPassword: FC<INewPassword> = () => {
    return (
        <>
            <form action="#" className='new-password'>
                <Typography content='Sign In' color='FFF' type='H2'/>
                <div className="new-password__box">
                        <Input 
                        title='Password' 
                        placeholder='Your password' 
                        type='text'
                    />
                        <Input 
                        title='Confirm password' 
                        placeholder='Confirm your password' 
                        type='password'
                        />
                </div>
                <p className='new-password__forgot'>Forgot password?</p>
                <Primary content='Sign in'/>
                <p className='new-password__accaunt'>Don’t have an account?<a href="https://www.youtube.com/"> Sign Up</a></p>
            </form>
        </>
    )
};
