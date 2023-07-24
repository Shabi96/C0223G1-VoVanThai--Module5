import React from "react";
import { createBook } from "../service/bookService";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";

export default function AddNewBook() {
    const navigate = useNavigate();
    return (
        <div className="container">
            <Formik
                initialValues={{ id: '', title: '', quantity: '' }}
                validationSchema={yup.object({
                    title: yup.string().required(),
                    quantity: yup.number().required().min(1)
                })}
                onSubmit={(values) => {
                    createBook(values).then(() => {
                        navigate('/books');
                    })
                }}>
                <Form>
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
                    <button type="submit">Add</button>
                </Form>
            </Formik>
        </div>
    )
}