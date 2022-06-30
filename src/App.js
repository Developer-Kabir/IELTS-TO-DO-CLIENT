import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Shared/Footer/Footer';
import Login from './Components/Auth/Login/Login';

import Register from './Components/Auth/Register/Register';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import UpdateProfile from './Components/UpdateProfile';


function App() {
  return (
    <div>
      <Routes>
    <Route path='/footer' element={<Footer></Footer>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/register' element={<Register></Register>}></Route>

    <Route path='/' element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
        }></Route>
        <Route path='/updateProfile' element={
          <RequireAuth>
           <UpdateProfile></UpdateProfile>
          </RequireAuth>
        }></Route>

      </Routes>
    </div>
  );
}

export default App;
