import { PageTemplate } from './Components/Pages/PageTemplate/PageTemplate';

import { Form } from './Components/Form/BackgroundForm';
import './App.scss';
import { useAppContext } from './Context/AppContext';
import { Route, Routes } from 'react-router-dom';


function App() {
   const{isDarkTheme}=useAppContext();
   const button = `app ${isDarkTheme() && 'dark'}`
   return (
     <div className = {button} >
         <Routes>
            <Route path='/*' element={<PageTemplate/>}/>
            <Route path='/form/*' element={<Form/>}/>
         </Routes>
     </div>
  );
}

export default App;

