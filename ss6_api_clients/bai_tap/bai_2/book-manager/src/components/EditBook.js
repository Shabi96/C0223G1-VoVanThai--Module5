import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editBook, getById } from "../service/bookService";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';


export default function EditBook() {
    const params = useParams();
    const [book, setBook] = useState({});
    const navigate = useNavigate();

    const books = async () => {
        try {
            getById(params.id).then((res) => {
                setBook(res);
            }
            );
        } catch {
            console.log("Error!!!!");
        }
    }
    useEffect(() => {books()}, [params.id])

    return (
        <>
            {book.id && (
                <div className="container">
                    <Formik
                        initialValues={{ id: book.id, title: book.title, quantity: book.quantity }}
                        validationSchema={yup.object({
                            title: yup.string().required(),
                            quantity: yup.number().required().min(1)
                        })}
                        onSubmit={(values) => {
                            editBook(params.id, values).then(() => {
                                navigate('/books');
                            })
                        }}>
                        <Form>
                            <div>
                                <Field type='hidden' name='id' />
                            </div>
                            <div>
                                <label htmlFor="title">
                                    Title:
                                </label>
                                <Field id='title' type='text' name='title' className='form-control' />
                                <ErrorMessage name="title" component='div' className="error" />
                            </div>
                            <div>
                                <label htmlFor="quantity">
                                    Quantity:
                                </label>
                                <Field id='quantity' type='number' name='quantity' className='form-control' />
                                <ErrorMessage name="quantity" component='div' className="error" />
                            </div>
                            <button type="submit">Edit</button>
                        </Form>
                    </Formik>
                </div>
            )}
        </>
    )
}