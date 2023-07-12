import { FC} from 'react';
import { Options } from './Options/Options';
import { Input } from '../../Form/Input/Input';
import { ToggleTheme } from './ToggleTheme/ToggleTheme';
import { Typography } from '../../Typography/Typography';
import { Primary } from '../../Buttons/Primary/Primary';
import { Secondary } from '../../Buttons/Secondary/Secondary';
import { useAppContext } from '../../../Context/AppContext';
import './Settings.scss';


interface ISettings {

}

export const Settings: FC<ISettings> = () => {
    const{isDarkTheme}=useAppContext()
    return (
        <div className='settings'>
            <div className="settings__box">
                <Options title='Profile'>
                    <div className="options__box-left">
                        <Input title='Name' placeholder='value' type='text'/>  
                   </div>
                    <div className="options__box-rigth">
                        <Input title='Email' placeholder='value' type='text'/>
                    </div>
                </Options>
                <Options title='Password'>
                    <div className="options__box-left">
                        <Input title='Password' placeholder='Your password' type='text'/>  
                    </div>
                    <div className="options__box-rigth">
                        <Input title='New password' placeholder='New password' type='text'/>
                        <Input title='Confirm password' placeholder='Confirm password' type='text'/>
                    </div>
                </Options>
                <Options title='Color mode' theme>
                    <div className='theme__content'>
                        <Typography content={isDarkTheme() ?'Light':'Dark'} color={isDarkTheme() ? '#000': '#fff'} type='subline2'/>
                        <Typography content={isDarkTheme() ?'Use light thema':'Use dark thema'} color={isDarkTheme() ?'#000':'#AFB2B6'} type='subline3'/>
                    </div>
                    <ToggleTheme/>
                </Options>
            </div>
            <div className="settings__buttons">
                <div className="settings__buttons-box">
                    <Secondary content='Cancel'/>
                    <Primary content='Save'/>
                </div>
            </div>
        </div>
    )
};
