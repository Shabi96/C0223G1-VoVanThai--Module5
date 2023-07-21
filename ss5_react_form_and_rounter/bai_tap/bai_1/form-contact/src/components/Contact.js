import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

export default function Contact() {

    return (
        <div className='container'>
            <h1>Contact Form</h1>
            <Formik
                initialValues={{ name: '', email: '', phone: '', message: '' }}
                validationSchema={yup.object({
                    name: yup.string().required(),
                    email: yup.string().required().email(),
                    phone: yup.string().required(),
                })}
                onSubmit={(values) => {
                    console.log(values);
                    alert("Submit success!!!!");
                }}
            >
                <Form className="form">
                    <table className="table">
                        <tr>
                            <td>
                                <label htmlFor="name">
                                    Name:
                                </label>
                            </td>
                            <td>
                                <Field id="name" type='text' name='name' />
                                <ErrorMessage name="name" component="div" className="error" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="email">
                                    Email:
                                </label>
                            </td>
                            <td>
                                <Field id='email' type='text' name='email' />
                                <ErrorMessage name="email" component="div" className='error' />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="phone">
                                    Phone:
                                </label>
                            </td>
                            <td>
                                <Field name='phone' type='text' id='phone' />
                                <ErrorMessage name="phone" component="div" className='error' />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="message">
                                    Message:
                                </label>
                            </td>
                            <td>
                                <Field as='textarea' id='message' name='message' />
                            </td>
                        </tr>
                    </table>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}