import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Shared/Footer/Footer';
import Login from './Components/Auth/Login/Login';

import Register from './Components/Auth/Register/Register';


function App() {
  return (
    <div>
      <Routes>
    <Route path='/' element={<Home></Home>}></Route>


    <Route path='/footer' element={<Footer></Footer>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/register' element={<Register></Register>}></Route>

      </Routes>
    </div>
  );
}

export default App;
