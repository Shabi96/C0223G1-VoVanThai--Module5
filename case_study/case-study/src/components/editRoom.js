import { useEffect, useState } from "react"
import { Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { getTypeRentals } from "../services/TypeRentals";
import { editService, getServiceById } from "../services/FalacityService";
import { Field } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

export default function EditRoom() {
    const [typeRentals, setTypeRentals] = useState([]);
    const params = useParams();
    const [room, setRoom] = useState({});
    const navigate = useNavigate();

    const getTypes = async () => {
        const data = await getTypeRentals();
        setTypeRentals(data);
    }

    const getRoom = async () => {
        const data = await getServiceById(params.id);
        setRoom(data)
    }
    useEffect(() => { getTypes(); getRoom() }, [params.id]);

    return (
        <div>
            {/*background*/}
            <h1>Furama Service </h1>
            <h2>Edit Room </h2>
            <div className="booking-form-w3layouts">
                {/* Form starts here */}
                {room.id &&
                    <Formik
                        initialValues={{
                            ...room, typeRental: JSON.stringify(room.typeRental)
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
                            image: yup.string().required("describe can't be empty"),
                        })}
                        onSubmit={async (values) => {
                            console.log(values);
                            const newService = {
                                ...values,
                                type: {
                                    id: 3,
                                    name: "Room"
                                },
                                typeRental: JSON.parse(values.typeRental),
                            };
                            editService(newService).then(() => {
                                navigate("/furama/services");
                                Swal.fire({
                                    title: "Edit success fully!!!!",
                                    text: "You clicked the button!",
                                    icon: "success",
                                    button: "Aww yiss!",
                                });
                            });
                        }}
                    >
                        <Form>
                            <Field name='id' type='hidden' />
                            <Field name='type' type='hidden' />
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
                                <div className="col-md-6">
                                    <label className="labels">Rental type</label>
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

                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <label className="labels">Image</label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        name="image"
                                    />
                                    <p style={{ color: "red" }}>
                                        <ErrorMessage name="image" />
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Free Service: </label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        name="free"
                                    />
                                    <p style={{ color: "red" }}>
                                        <ErrorMessage name="free" />
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
            </div>
        </div>
    )
}