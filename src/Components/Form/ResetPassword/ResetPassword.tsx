import { FC } from 'react';
import { Typography } from '../../Typography/Typography';
import { Input } from '../Input/Input';
import { Primary } from '../../Buttons/Primary/Primary';
import './ResetPassword.scss';

interface IResetPassword {
}

export const ResetPassword: FC<IResetPassword> = () => {
    return (
        <>
        <form action="#" className='reset-password'>
            <Typography content='Reset password' color='FFF' type='H2'/>
            <div className="reset-password__box">
                 <Input 
                    title='Email' 
                    placeholder='Your email' 
                    type='text'
                    isFocus = {true}
                />
            </div>
            <Primary content='Reset'/>
        </form>
    </>
    )
};
