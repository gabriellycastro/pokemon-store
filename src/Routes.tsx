import React from 'react';
import { Routes as WrapperRoutes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';

export default function Routes() {
    return (
        <BrowserRouter>
            <WrapperRoutes>
                <Route path='/' element={<Home />} />
                {/* <Route path='/product/:item' element={<Product />} /> */}
            </WrapperRoutes>
        </BrowserRouter>
    )
}