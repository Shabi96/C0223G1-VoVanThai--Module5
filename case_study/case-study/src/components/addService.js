import { useNavigate } from "react-router-dom";

export default function AddNewService() {

    const navigate = useNavigate();

    const handleButtonAddHouse = () => {
        navigate("/furama/add-house");
    };
    const handleButtonAddRoom = () => {
        navigate("/furama/add-room");
    };
    const handleButtonAddVilla = () => {
        navigate("/furama/add-villa");
    };

    return (
        <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
        >           
            <button
                type="button"
                className="btn btn-outline-dark"
                onClick={handleButtonAddVilla}
            >
                Villa
            </button>
            <button
                type="button"
                className="btn btn-outline-dark"
                onClick={handleButtonAddHouse}
            >
                House
            </button>
            <button
                type="button"
                className="btn btn-outline-dark"
                onClick={handleButtonAddRoom}
            >
                Room
            </button>
        </div>
        // <div>
        //     {/*background*/}
        //     <h1>Furama Service </h1>
        //     <div className="booking-form-w3layouts">
        //         {/* Form starts here */}
        //         <Formik
        //             initialValues={{
        //                 service: "",
        //                 costs: "",
        //                 max_people: "",
        //                 usable_area: "",
        //                 type: "",
        //                 standard: "",
        //                 description: "",
        //                 pool: "",
        //                 floor: "",
        //                 free: "",
        //                 image: "",
        //             }}
        //             validationSchema={yup.object({
        //                 costs: yup.number().required("price can't be empty"),
        //                 service: yup
        //                     .string()
        //                     .required("name Service can't be empty"),
        //                 max_people: yup.number().required("max people can't be empty"),
        //                 usable_area: yup.number().required("area can't be empty"),
        //                 type: yup
        //                     .string()
        //                     .required("type rental can't be empty"),
        //                 standard: yup.string().required("standard can't be empty"),
        //                 description: yup.string().required("describe can't be empty"),
        //                 pool: yup.number().required("pool area can't be empty"),
        //                 floor: yup
        //                     .number()
        //                     .required("pool area can't be empty"),
        //                 image: yup.string().required("describe can't be empty"),
        //                 standard: yup.string(),
        //             })}
        //             onSubmit={async (values) => {
        //                 const newService = {
        //                     ...values,
        //                     service: {
        //                         id: 1,
        //                         nameTypeService: "Villa",
        //                     },
        //                     type: JSON.parse(values.type),
        //                 };
        //                 createService(newService).then(() => {
        //                     navigate("/furama");
        //                     Swal.fire({
        //                         title: "Create success fully!!!!",
        //                         text: "You clicked the button!",
        //                         icon: "success",
        //                         button: "Aww yiss!",
        //                     });
        //                 });
        //             }}
        //         >
        //             <Form>
        //                 <div className="row mt-2">
        //                     <div className="col-md-12">
        //                         <label>Name Service: </label>
        //                         <Field
        //                             type="text"
        //                             className="form-control"
        //                             name="service"
        //                         />
        //                         <p style={{ color: "red" }}>
        //                             <ErrorMessage name="service" />
        //                         </p>
        //                     </div>
        //                 </div>
        //                 <div className="row mt-2">
        //                     <div className="col-md-6 pb-2">
        //                         <label className="labels">Maximum number of people</label>
        //                         <Field
        //                             type="number"
        //                             className="form-control"
        //                             name="max_people"
        //                         />
        //                         <p style={{ color: "red" }}>
        //                             <ErrorMessage name="max_people" />
        //                         </p>
        //                     </div>
        //                     <div className="col-md-6 pb-2">
        //                         <label className="labels">Area (m2)</label>
        //                         <Field
        //                             type="number"
        //                             className="form-control"
        //                             placeholder="m2"
        //                             name="usable_area"
        //                         />
        //                         <p style={{ color: "red" }}>
        //                             <ErrorMessage name="usable_area" />
        //                         </p>
        //                     </div>
        //                     <div className="col-md-6 pb-2">
        //                         <label className="labels">Price</label>
        //                         <Field
        //                             type="number"
        //                             className="form-control"
        //                             name="costs"
        //                         />
        //                         <p style={{ color: "red" }}>
        //                             <ErrorMessage name="costs" />
        //                         </p>
        //                     </div>
        //                     <div className="col-md-6 pb-2">
        //                         <label className="labels">Standard</label>
        //                         <Field
        //                             type="text"
        //                             className="form-control"
        //                             name="standard"
        //                         />
        //                         <p style={{ color: "red" }}>
        //                             <ErrorMessage name="standard" />
        //                         </p>
        //                     </div>
        //                 </div>
        //                 <div className="row mt-3">
        //                     <div className="col-md-6">
        //                         <label className="labels">Pool area</label>
        //                         <Field
        //                             type="number"
        //                             className="form-control"
        //                             name="pool"
        //                         />
        //                         <p style={{ color: "red" }}>
        //                             <ErrorMessage name="pool" />
        //                         </p>
        //                     </div>
        //                     <div className="col-md-6">
        //                         <label className="labels">Number of floors</label>
        //                         <Field
        //                             type="number"
        //                             className="form-control"
        //                             name="floor"
        //                         />
        //                         <p style={{ color: "red" }}>
        //                             <ErrorMessage name="floor" />
        //                         </p>
        //                     </div>
        //                 </div>
        //                 <div className="row mt-3">
        //                     <div className="col-md-6">
        //                         <label className="labels">image</label>
        //                         <Field
        //                             type="text"
        //                             className="form-control"
        //                             name="image"
        //                         />
        //                         <p style={{ color: "red" }}>
        //                             <ErrorMessage name="image" />
        //                         </p>
        //                     </div>
        //                     <div className="col-md-3">
        //                         <label className="labels">rental type</label>
        //                         <Field as="select"
        //                             className="form-select"
        //                             aria-label="Default select example"
        //                             name="type"
        //                         >
        //                             <option value=''>Select</option>
        //                             {typeRentals.length > 0 && typeRentals.map((t) => {
        //                                 return (
        //                                     <option key={t.id} value={`${JSON.stringify(t)}`}>
        //                                         {t.name}
        //                                     </option>
        //                                 );
        //                             })}
        //                         </Field>
        //                         <p style={{ color: "red" }}>
        //                             <ErrorMessage name="type" />
        //                         </p>
        //                     </div>
        //                 </div>
        //                 <div className="row mt-3">
        //                     <div className="col-md-12">
        //                         <label className="labels">Description: </label>
        //                         <Field
        //                             type="text"
        //                             className="form-control"
        //                             name="description"
        //                         />
        //                         <p style={{ color: "red" }}>
        //                             <ErrorMessage name="description" />
        //                         </p>
        //                     </div>
        //                 </div>
        //                 <div className="mt-5 text-center">
        //                     <button className="btn btn-primary" type="submit">
        //                         Submit
        //                     </button>
        //                 </div>
        //             </Form>
        //         </Formik>
                /* <form action="#" method="post">
                    <h2 className="sub-heading-agileits">Add new service</h2>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <select className="form-control">
                                <option>Service Name</option>
                                <option>House</option>
                                <option>Room</option>
                                <option>Villa</option>
                            </select>
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <input type="text" placeholder="Area" defaultValue required />
                        </div>
                    </div>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <input name="Text" type="text" placeholder="Rental costs" required />
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <input type="text" placeholder="Peoples" />
                        </div>
                    </div>
                    <div className="triple-wthree">
                        <div className="field-agileinfo-spc form-w3-agile-text11">
                            <select className="form-control">
                                <option value>Rental type</option>
                                <option value={1}>Hour</option>
                                <option value={2}>Day</option>
                                <option value={3}>Month</option>
                                <option value={4}>Year</option>
                            </select>
                        </div>
                    </div>
                    <h3 className="sub-heading-agileits">Personal Details</h3>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <input type="text" name="Name" placeholder="Full Name" required />
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <input type="text" name="Phone no" placeholder="Phone Number" required />
                        </div>
                    </div>
                    <div className="field-agileinfo-spc form-w3-agile-text">
                        <input type="email" name="Email" placeholder="Email" required />
                    </div>
                    <div className="clear" />
                    <input type="submit" defaultValue="Submit" />
                    <input type="reset" defaultValue="Clear Form" />
                    <div className="clear" />
                </form> */
                // {/*// Form starts here */}
            // </div>
            // {/*copyright*/}
            // {/* Calendar Js */}
            // {/* //Calendar Js */}
        // </div>

    )
}