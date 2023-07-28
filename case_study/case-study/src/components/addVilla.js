import { useEffect, useState } from "react"
import { Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { getTypeRentals } from "../services/TypeRentals";
import { createService } from "../services/FalacityService";
import { Field } from "formik";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export default function AddVilla() {
    const [typeRentals, setTypeRentals] = useState([]);
    const navigate = useNavigate();

    const getTypes = async () => {
        const data = await getTypeRentals();
        setTypeRentals(data);
    }

    useEffect(() => { getTypes() }, []);

    return (
        <div>
            {/*background*/}
            <h1>Furama Service </h1>
            <h2>Add new Villa </h2>
            <div className="booking-form-w3layouts">
                {/* Form starts here */}
                <Formik
                    initialValues={{
                        service: "",
                        costs: "",
                        max_people: "",
                        usable_area: "",
                        type: "",
                        typeRental: "",
                        standard: "",
                        description: "",
                        pool: "",
                        floor: "",
                        free: "",
                        image: "",
                    }}
                    validationSchema={yup.object({
                        costs: yup.number().required("price can't be empty"),
                        service: yup
                            .string()
                            .required("name Service can't be empty"),
                        max_people: yup.number().required("max people can't be empty"),
                        usable_area: yup.number().required("area can't be empty"),
                        typeRental: yup
                            .string()
                            .required("type rental can't be empty"),
                        standard: yup.string().required("standard can't be empty"),
                        description: yup.string().required("describe can't be empty"),
                        pool: yup.number().required("pool area can't be empty"),
                        floor: yup
                            .number()
                            .required("pool area can't be empty"),
                        image: yup.string().required("describe can't be empty"),
                        standard: yup.string(),
                    })}
                    onSubmit={async (values) => {
                        const newService = {
                            ...values,
                            type: {
                                id: 1,
                                name: "Villa"
                            },
                            typeRental: JSON.parse(values.typeRental),
                        };
                        createService(newService).then(() => {
                            navigate("/furama");
                            Swal.fire({
                                title: "Create success fully!!!!",
                                text: "You clicked the button!",
                                icon: "success",
                                button: "Aww yiss!",
                            });
                        });
                    }}
                >
                    <Form>
                        <Field name="type" type='hidden'/>
                        <div className="row mt-2">
                            <div className="col-md-12">
                                <label>Name Service: </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    name="service"
                                />
                                <p style={{ color: "red" }}>
                                    <ErrorMessage name="service" />
                                </p>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6 pb-2">
                                <label className="labels">Maximum number of people</label>
                                <Field
                                    type="number"
                                    className="form-control"
                                    name="max_people"
                                />
                                <p style={{ color: "red" }}>
                                    <ErrorMessage name="max_people" />
                                </p>
                            </div>
                            <div className="col-md-6 pb-2">
                                <label className="labels">Area (m2)</label>
                                <Field
                                    type="number"
                                    className="form-control"
                                    placeholder="m2"
                                    name="usable_area"
                                />
                                <p style={{ color: "red" }}>
                                    <ErrorMessage name="usable_area" />
                                </p>
                            </div>
                            <div className="col-md-6 pb-2">
                                <label className="labels">Price</label>
                                <Field
                                    type="number"
                                    className="form-control"
                                    name="costs"
                                />
                                <p style={{ color: "red" }}>
                                    <ErrorMessage name="costs" />
                                </p>
                            </div>
                            <div className="col-md-6 pb-2">
                                <label className="labels">Standard</label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    name="standard"
                                />
                                <p style={{ color: "red" }}>
                                    <ErrorMessage name="standard" />
                                </p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label className="labels">Pool area</label>
                                <Field
                                    type="number"
                                    className="form-control"
                                    name="pool"
                                />
                                <p style={{ color: "red" }}>
                                    <ErrorMessage name="pool" />
                                </p>
                            </div>
                            <div className="col-md-6">
                                <label className="labels">Number of floors</label>
                                <Field
                                    type="number"
                                    className="form-control"
                                    name="floor"
                                />
                                <p style={{ color: "red" }}>
                                    <ErrorMessage name="floor" />
                                </p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label className="labels">image</label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    name="image"
                                />
                                <p style={{ color: "red" }}>
                                    <ErrorMessage name="image" />
                                </p>
                            </div>
                            <div className="col-md-3">
                                <label className="labels">rental type</label>
                                <Field as="select"
                                    className="form-select"
                                    aria-label="Default select example"
                                    name="typeRental"
                                >
                                    <option value=''>Select</option>
                                    {typeRentals.length > 0 && typeRentals.map((t) => {
                                        return (
                                            <option key={t.id} value={`${JSON.stringify(t)}`}>
                                                {t.name}
                                            </option>
                                        );
                                    })}
                                </Field>
                                <p style={{ color: "red" }}>
                                    <ErrorMessage name="typeRental" />
                                </p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <label className="labels">Description: </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    name="description"
                                />
                                <p style={{ color: "red" }}>
                                    <ErrorMessage name="description" />
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
            </div>
        </div>
    )
}