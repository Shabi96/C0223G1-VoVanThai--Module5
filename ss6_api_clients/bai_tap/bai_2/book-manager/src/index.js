import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import BookList from './components/BookList';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddNewBook from './components/AddNewBook';
import EditBook from './components/EditBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/books' element={<BookList />}></Route>
                <Route path='/books/create' element={<AddNewBook />}></Route>
                <Route path='/books/edit/:id' element={<EditBook />}></Route>
            </Routes>
        </BrowserRouter>

    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
