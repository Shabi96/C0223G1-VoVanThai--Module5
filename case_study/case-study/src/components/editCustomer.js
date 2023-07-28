import { useEffect, useState } from "react"
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import { getAllCustomerTypes } from "../services/CustomerTypes";
import { editCustomer, getCustomerById } from "../services/CustomerServices";

export default function AddNewCustomer() {

    const [customerTypes, setCustomerTypes] = useState([]);
    const [customer, setCustomer] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    const SEX_LIST = [{ label: 'Male', value: 'Male' }, { label: 'Female', value: 'Female' }, { label: 'Không chọn', value: '' }];

    const getTypes = async () => {
        const data = await getAllCustomerTypes();
        setCustomerTypes(data);
    }

    const getCustomer = async () => {
        const data = await getCustomerById(params.id);
        setCustomer(data);
    }

    useEffect(() => { getTypes(); getCustomer() }, []);

    return (
        <div>

            <h1>Customer Service </h1>
            <div className="booking-form-w3layouts">
                {customer.id &&
                    <Formik initialValues={{
                        id: customer.id,
                        name: customer.name, gender: customer.gender,
                        date_of_birth: customer.date_of_birth, email: customer.email,
                        id_card: customer.id_card, phone_number: customer.phone_number,
                        address: customer.address, customer_type: JSON.stringify(customer.customer_type)
                    }}
                        validationSchema={yup.object({
                            name: yup.string().max(50, 'Name cannot be longer than 50 characters').min(3, 'Name must be at least 3 characters').required("Please enter your name !"),
                            gender: yup.string().required('Please choose your gender!'),
                            date_of_birth: yup.string().required('Please enter your date of birth!'),
                            email: yup.string().email('Your email invalidate').required('Please enter your email!'),
                            id_card: yup.string().max(12).min(10).required('Please enter your ID card!'),
                            address: yup.string().required('Please enter your address!'),
                            phone_number: yup.string().length(10).required('Please enter your phone number!'),
                            customer_type: yup.string().required('Please choose customer type!')
                        })}
                        onSubmit={(value) => {
                            editCustomer({ ...value, customer_type: JSON.parse(value.customer_type) }).then(() => {
                                navigate('/furama/customers');
                                Swal.fire({
                                    title: "Edit success fully!!!!",
                                    text: "You clicked the button!",
                                    icon: "success",
                                    button: "Aww yiss!",
                                });
                            })
                        }}
                    >
                        <Form>
                            <Field name='id' type='hidden' />
                            <div className="row mt-2">
                                <div className="col-md-12">
                                    <label>Name Customer: </label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        name="name"
                                    />
                                    <p style={{ color: "red" }}>
                                        <ErrorMessage name="name" />
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6 pb-2">
                                    <label className="labels" htmlFor='gender'>
                                        Gender:
                                    </label>
                                    <div>
                                        {
                                            SEX_LIST.map((gender, index) => {
                                                return (
                                                    <label className="labels" key={index}>
                                                        <Field type='radio' name='gender' value={gender.value} />
                                                        {gender.label}
                                                    </label>
                                                )
                                            })
                                        }
                                    </div>
                                    <p style={{ color: "red" }}>
                                        <ErrorMessage name="gender" />
                                    </p>
                                    {/* <label className="labels">Maximum number of people</label>
                                <Field
                                    type="number"
                                    className="form-control"
                                    name="max_people"
                                /> */}

                                </div>
                                <div className="col-md-6 pb-2">
                                    <label className="labels">Day Of Birth: </label>
                                    <Field
                                        type="date"
                                        className="form-control"
                                        name="date_of_birth"
                                    />
                                    <p style={{ color: "red" }}>
                                        <ErrorMessage name="date_of_birth" />
                                    </p>
                                </div>
                                <div className="col-md-6 pb-2">
                                    <label className="labels">Id Card: </label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        name="id_card"
                                    />
                                    <p style={{ color: "red" }}>
                                        <ErrorMessage name="id_card" />
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Customer type</label>
                                    <Field as="select"
                                        className="form-select"
                                        aria-label="Default select example"
                                        name="customer_type"
                                    >
                                        <option value=''>Select</option>
                                        {customerTypes.length > 0 && customerTypes.map((c) => {
                                            return (
                                                <option key={c.id} value={`${JSON.stringify(c)}`}>
                                                    {c.name}
                                                </option>
                                            );
                                        })}
                                    </Field>
                                    <p style={{ color: "red" }}>
                                        <ErrorMessage name="customer_type" />
                                    </p>
                                </div>
                            </div>

                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <label className="labels">Phone Number: </label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        name="phone_number"
                                    />
                                    <p style={{ color: "red" }}>
                                        <ErrorMessage name="phone_number" />
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Email: </label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        name="email"
                                    />
                                    <p style={{ color: "red" }}>
                                        <ErrorMessage name="email" />
                                    </p>
                                </div>

                            </div>
                            <div className="row mt-2">
                                <div className="col-md-12">
                                    <label className="labels">Address: </label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        name="address"
                                    />
                                    <p style={{ color: "red" }}>
                                        <ErrorMessage name="address" />
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <button className="btn btn-primary" type="submit">
                                    Submit
                                </button>
                            </div>
                        </Form>
                    </Formik>
                }
                {/* Form starts here */}
                {/* <form action="#" method="post">
                    <h2 className="sub-heading-agileits">Add new Customer</h2>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <input type="text" placeholder="Full Name" defaultValue required />
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <input type="text" placeholder="Day Of Birth" defaultValue required />
                        </div>
                    </div>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <input name="Text" type="text" placeholder="Gender" required />
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <input type="text" placeholder="Identity card number" />
                        </div>
                    </div>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <input name="Text" type="text" placeholder="Phone Number" required />
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <input type="text" placeholder="Email" />
                        </div>
                    </div>
                    <div className="triple-wthree">
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <select className="form-control">
                                <option value>Type of guest</option>
                                <option value={1}>Diamond</option>
                                <option value={2}>Platinum</option>
                                <option value={3}>Gold</option>
                                <option value={4}>Silver</option>
                                <option value={5}>Member</option>
                            </select>
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <input type="text" name="Name" placeholder="Address" required />
                        </div>
                    </div>
                    <div className="clear" />
                    <input type="submit" defaultValue="Submit" />
                    <input type="reset" defaultValue="Clear Form" />
                    <div className="clear" />
                </form> */}
                {/*// Form starts here */}
            </div>
        </div>
    )
}