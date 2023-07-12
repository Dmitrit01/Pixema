import { FC } from 'react';
import bg from '../../assets/Form/bg.jpg';
import { Logo } from '../Logo/Logo';
import { SignIn } from './SignIn/SignIn';
import { SignUp } from './SignUp/SignUp';
import { NewPassword } from './NewPassword/NewPassword';
import './BackgroundForm.scss';
import { ResetPassword } from './ResetPassword/ResetPassword';

interface IBackgroundForm {

}

export const Form: FC<IBackgroundForm> = () => {
    
    return (
        <div className='form-background'  >
            <div className="form-background__logo"><Logo/></div>
            <NewPassword/>
            {/* <ResetPassword/> */}
            {/* <SignUp/> */}
            {/* <SignIn/> */}
            <footer className='form-background__footer'>© All Rights Reserved</footer>
        </div>
    )
};
