import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from '../Component/Layout/Layout';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import Menus from './Menus/Menus';
import Orders from './Orders/Orders';
import Page404 from './Page404/Page404';
import Register from './Register/Register';
import Settings from './Settings/Settings';

const MainPage = () => {
    return (
        <>
            <Router>
                <Routes>

                    <Route path='/' element={<Layout />}>
                        <Route path='/' element={<Dashboard />}></Route>
                        <Route path='/orders' element={<Orders />}></Route>
                        <Route path='/menus' element={<Menus />}></Route>
                        <Route path='/settings' element={<Settings />}></Route>
                        <Route path='*' element={<Page404 />}></Route>
                    </Route>

                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                </Routes>
            </Router>
        </>
    );
};

export default MainPage;