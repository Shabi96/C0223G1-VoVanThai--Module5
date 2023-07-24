import React, { useEffect, useState } from 'react';
import { getTodoList, create } from '../service/todoListService';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

export default function TodoList() {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        const getTodoLists = async () => {
            try {
            const data = await getTodoList();
            console.log(data);
            setTodoList(data);
            } catch {
                alert("Error!!!!")
            }
        }
        getTodoLists();
    }, [])

    return (
        <div className='container'>
            <h1>Todo List</h1>
            <Formik
                initialValues={{ id: '', name: '' }}
                validationSchema={yup.object({
                    name: yup.string().required()
                })}
                onSubmit={(values) => {
                    const createTodoList = async () => {
                        await create(values);
                        const newTodoList = await getTodoList();
                        setTodoList(newTodoList);
                    }
                    createTodoList();
                    alert("Submit success!!!!");
                }}>
                <Form>
                    <Field id='name' type='text' name='name' className='form-control' />
                    <ErrorMessage name='name' component='div' className='error' />
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
            <ul>
                {
                    todoList.map((list, index) => {
                        return (
                            <li key={index}>{list.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}