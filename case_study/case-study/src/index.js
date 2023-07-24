import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';
import AddNewService from './components/addService';
import AllCustomer from './components/allCustomer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/furama' element={<Body />}></Route>
      <Route path='/furama/customers' element={<AllCustomer />} ></Route>
      <Route path='/furama/services/create' element={<AddNewService />} ></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
