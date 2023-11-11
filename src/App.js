
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import SignIn from './Pages/SignIn';

import ForgotPassword from './Pages/ForgotPassword';
import SingUp from './Pages/SingUp';

function App() {
  return (
    <>
      <h1 className='text-2xl text-bold' >hello world</h1>
      <Home/>
      <Profile/>
      <SignIn/>
      <SingUp/>
      <ForgotPassword/>

    </>
    

  );
}

export default App;
