import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Fichas from '../Components/fichas';
import Home from '../pages/home/home';
import NavesSW from '../Components/naves';
import Navbar from '../pages/navBar/navBar';
import LogInPage from '../pages/login&signup/login';
import SignUpPage from '../pages/login&signup/signup';


const Router = () => (

    <BrowserRouter>
        <Routes>
            <Route path='/home/' element={<Home/>} />;
            <Route path='/' element={<Navbar/>} />;
            <Route path='/naves/' element={<NavesSW/>} />;
            <Route path='/fichas/:id' element={<Fichas/>} />;
            <Route path='/login/' element={<LogInPage/>} />;
            <Route path='/signup/' element={<SignUpPage/>} />;
            
        </Routes>
    </BrowserRouter>
);

export default Router;