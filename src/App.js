import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import SignIn from './Pages/SignIn';
import ForgotPassword from './Pages/ForgotPassword';
import SingUp from './Pages/SingUp';
import Offers from './Pages/Offers';
import Header from './componets/Header';


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>


          <Route path='/' element={<Home/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/sign-in' element={<SignIn/>} />
          <Route path='/sign-up' element={<SingUp/>} />
          <Route path='/offers' element={<Offers/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />  


        </Routes>
      </Router>

    </>
    

  );
}

export default App;
