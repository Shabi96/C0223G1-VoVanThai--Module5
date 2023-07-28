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
import AllService from './components/allService';
import AddVilla from './components/addVilla';
import AddHouse from './components/addHouse';
import AddRoom from './components/addNewRoom';
import AddNewCustomer from './components/addCustomer';
import EditCustomer from './components/editCustomer';
import EditVilla from './components/editVilla';
import EditHouse from './components/editHouse';
import EditRoom from './components/editRoom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <div className='container-fluid'>
    <Header />
    <Routes>
      <Route path='/furama' element={<Body />}></Route>
      <Route path='/furama/customers' element={<AllCustomer />} ></Route>
      <Route path='/furama/services' element={<AllService />} ></Route>
      <Route path='/furama/services/create' element={<AddNewService />} ></Route>
      <Route path='/furama/add-villa' element={<AddVilla />} ></Route>
      <Route path='/furama/services/villa/:id' element={<EditVilla />} ></Route>
      <Route path='/furama/add-house' element={<AddHouse />} ></Route>
      <Route path='/furama/services/house/:id' element={<EditHouse />} ></Route>
      <Route path='/furama/add-room' element={<AddRoom />} ></Route>
      <Route path='/furama/services/room/:id' element={<EditRoom />} ></Route>
      <Route path='/furama/customers/create' element={<AddNewCustomer />} ></Route>
      <Route path='/furama/customers/:id' element={<EditCustomer />} ></Route>
    </Routes>
    <Footer />
    </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
