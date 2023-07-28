import { Field, Form, Formik } from "formik";
import * as yup from 'yup';

export default function AddContract() {
    return (
        <div>
            <h1>Contract Service </h1>
            <div className="booking-form-w3layouts">
                {/* Form starts here */}
                <Formik initialValues={{
                    id: '', idCustomer: '', typeService: '', startDate: '', endDate: '', deposit: '', total: ''
                }}
                validationSchema={yup.object({
                    deposit: yup.number().required().min(1)
                })}
                onSubmit={(values) => {

                }}>
                    <Form>
                    <h2 className="sub-heading-agileits">Add new Contract</h2>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <Field name='idCustomer' type="text" placeholder="Id Customer" defaultValue />
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <Field />
                            <select className="form-control">
                                <option value>Type Service</option>
                                <option value={1}>Villa</option>
                                <option value={2}>House</option>
                                <option value={3}>Room</option>
                            </select>
                        </div>
                    </div>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <Field name="startDate" type="date" placeholder="Start Date"/>
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <Field type="date" name='endDate' placeholder="End Date" />
                        </div>
                    </div>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <Field name="deposit" type="number" placeholder="Advance deposit amount"/>
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <Field name='total' type="text" placeholder="Total" />
                        </div>
                    </div>
                    <div className="clear" />
                    <input type="submit" defaultValue="Submit" />
                    <input type="reset" defaultValue="Clear Form" />
                    <div className="clear" />
                    </Form>
                </Formik>
                <form action="#" method="post">
                    <h2 className="sub-heading-agileits">Add new Contract</h2>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <input type="text" placeholder="Id Customer" defaultValue required />
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <select className="form-control">
                                <option value>Type Service</option>
                                <option value={1}>Villa</option>
                                <option value={2}>House</option>
                                <option value={3}>Room</option>
                            </select>
                        </div>
                    </div>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <input name="Text" type="text" placeholder="Start Date" required />
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <input type="text" placeholder="End Date" />
                        </div>
                    </div>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <input name="Text" type="text" placeholder="Advance deposit amount" required />
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <input type="text" placeholder="Total" />
                        </div>
                    </div>
                    <div className="clear" />
                    <input type="submit" defaultValue="Submit" />
                    <input type="reset" defaultValue="Clear Form" />
                    <div className="clear" />
                </form>
                {/*// Form starts here */}
            </div>
        </div>
    )
}