import { Routes, Route } from 'react-router-dom';
import ProductsComponent  from 'components/products';
import React from 'react';
import CartComponent from 'components/cart';

const Main = () => {
return (         
    <Routes>
        <Route path='/' element={<ProductsComponent/>} />
        <Route path='/product' element={<ProductsComponent/>} />
        <Route path='/cart' element={<CartComponent/>}/>
    </Routes>
);
}
export default Main;