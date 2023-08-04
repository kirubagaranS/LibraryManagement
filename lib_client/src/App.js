import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Loginpageslib } from './components/login/login';
import { Navbars } from './components/Navigation/navbar';
import { Bookdetialss } from './components/Bookdetails/bookdetial';
import { Signuppage } from './components/register/register';
import { Allbooksstock } from './components/Allbooks/allbooks';
import { Stocklistes } from './components/stocklist/stocklist';
import { Formbook } from './components/form/bookform';
import { Updatebooksdata } from './components/update/update';


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Loginpageslib/>}/>
    <Route path='/hrsregisters' element={[<Navbars/>]}/>
    <Route path='/detialss' element={[<Bookdetialss/>]}/>
    <Route path='/regiss' element={[<Signuppage/>]}/>
    <Route path='/update' element={[<Allbooksstock/>]}/>
    <Route path='/stockss' element={[<Stocklistes/>]}/>
    <Route path='/formss' element={[<Formbook/>]}/>
    <Route path='/updatess/:Book_id' element={[<Updatebooksdata/>]}/>
   
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
