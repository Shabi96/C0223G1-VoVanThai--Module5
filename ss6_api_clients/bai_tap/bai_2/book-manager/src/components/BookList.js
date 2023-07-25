import React, { useEffect, useState } from 'react';
import { getAllBooks, deleteBook } from '../service/bookService';
import { Link } from 'react-router-dom';

export default function BookList() {
    const [bookList, setBookList] = useState([]);

    const getBookList = async () => {
        try {
            const data = await getAllBooks();
            console.log(data);
            setBookList(data);
        } catch (error) {
            console.log("Error!!!!");
        }
    }
    useEffect(() => { getBookList() }, []);

    function deleteById(id) {
        if (window.confirm("Are you sure delete book by id: " + id)) {
            deleteBook(id).then(() => {
                getAllBooks().then((data) => {
                    setBookList(data);
                })
            }
            )
        }
    }

    return (
        <div className='container'>
            <h1>Library</h1>
            <Link to={`/books/create`} className='btn btn-outline-success'>Add a new Book</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookList.map((book, index) => {
                            return (
                                <tr key={index}>
                                    <td>{book.title}</td>
                                    <td>{book.quantity}</td>
                                    <td>
                                        <Link to={`/books/edit/${book.id}`} className='btn btn-outline-success'>Edit</Link>
                                        <button className='btn btn-outline-danger' onClick={() =>
                                            deleteById(book.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}