import { PageTemplate } from './Components/Pages/PageTemplate/PageTemplate';

// import { Form } from './Components/Form/BackgroundForm';
import './App.scss';
import { useAppContext } from './Context/AppContext';


function App() {
   const{isDarkTheme}=useAppContext();
   const button = `app ${isDarkTheme() && 'dark'}`
   return (
     <div className = {button} >
         <PageTemplate/>
        {/* <Form/> */}
     </div>
  );
}

export default App;

