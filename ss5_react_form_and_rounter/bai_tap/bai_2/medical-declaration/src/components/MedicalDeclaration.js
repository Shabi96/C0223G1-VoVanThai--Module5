import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

export default function MedicalDeclaration() {

    const SEX_LIST = [{ label: 'Male', value: 'Male' }, { label: 'Female', value: 'Female' }, { label: 'Không chọn', value: '' }];

    return (
        <>
            <Formik
                initialValues={{
                    fullName: '',
                    idCard: '',
                    dayOfBirth: '',
                    gender: '',
                    nationality: '',
                    company: '',
                    parts: '',
                    healthInsurance: false,
                    province: '',
                    district: '',
                    wards: '',
                    house: '',
                    phone: '',
                    email: '',
                    history: '',
                    signal: [],
                    contact: []
                }}
                validationSchema={yup.object({
                    fullName: yup.string().required(),
                    idCard: yup.string().required(),
                    dayOfBirth: yup.number().required().min(1900),
                    nationality: yup.string().required(),
                    healthInsurance: yup.bool(),
                    province: yup.string().required(),
                    district: yup.string().required(),
                    wards: yup.string().required(),
                    house: yup.string().required(),
                    phone: yup.string().required(),
                    email: yup.string().required().email(),
                })}
                onSubmit={(values) => {
                    console.log(JSON.stringify(values));
                    alert("Submit successfully!!!");
                }}
            >
                <Form className='container'>
                    <h1>Medical Declaration</h1>
                    <div>
                        <label htmlFor='fullName'>
                            Full Name:
                        </label>
                        <Field id='fullName' type='text' name='fullName' />
                        <ErrorMessage name='fullName' component='div' className='error' /><br />
                    </div>
                    <div>
                        <label htmlFor='idCard'>
                            Id Card:
                        </label>
                        <Field id='idCard' type='text' name='idCard' />
                        <ErrorMessage name='idCard' component='div' className='error' />
                    </div>
                    <div>
                        <label htmlFor='dayOfBirth'>
                            Year of Birth:
                        </label>
                        <Field id='dayOfBirth' type='number' name='dayOfBirth' />
                        <ErrorMessage name='dayOfBirth' component='div' className='error' />
                    </div>
                    <div>
                        <label htmlFor='gender'>
                            Gender:
                        </label>
                        <div>
                            {
                                SEX_LIST.map((gender, index) => {
                                    return (
                                        <label key={index}>
                                            <Field type='radio' name='gender' value={gender.value} />
                                            {gender.label}
                                        </label>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <label htmlFor='nationality'>
                            Nationality:
                        </label>
                        <Field id='nationality' type='text' name='nationality' />
                        <ErrorMessage name='nationality' component='div' className='error' />
                    </div>
                    <div>
                        <label htmlFor='company'>
                            Company:
                        </label>
                        <Field id='company' type='text' name='company' />
                        <ErrorMessage name='company' component='div' className='error' />
                    </div>
                    <div>
                        <label htmlFor='parts'>
                            Parts:
                        </label>
                        <Field id='parts' type='text' name='parts' />
                        <ErrorMessage name='parts' component='div' className='error' />
                    </div>
                    <div>
                        <label htmlFor='healthInsurance'>
                            <Field id='healthInsurance' type='checkbox' name='healthInsurance' />
                            Health Insurance
                        </label>
                    </div>
                    <div>
                        <h3>Contacts in Vietnam</h3>
                        <label htmlFor='province'>
                            Province:
                        </label>
                        <Field id='province' type='text' name='province' />
                        <ErrorMessage name='province' component='div' className='error' />
                    </div>
                    <div>
                        <label htmlFor='district'>
                            District:
                        </label>
                        <Field id='district' type='text' name='district' />
                        <ErrorMessage name='district' component='div' className='error' />
                    </div>
                    <div>
                        <label htmlFor='wards'>
                            Wards:
                        </label>
                        <Field id='wards' type='text' name='wards' />
                        <ErrorMessage name='wards' component='div' className='error' />
                    </div>
                    <div>
                        <label htmlFor='house'>
                            House:
                        </label>
                        <Field id='house' type='text' name='house' />
                        <ErrorMessage name='house' component='div' className='error' />
                    </div>
                    <div>
                        <label htmlFor='phone'>
                            Phone:
                        </label>
                        <Field id='phone' type='text' name='phone' />
                        <ErrorMessage name='phone' component='div' className='error' />
                    </div>
                    <div>
                        <label htmlFor='email'>
                            Email:
                        </label>
                        <Field id='email' type='text' name='email' />
                        <ErrorMessage name='email' component='div' className='error' />
                    </div>
                    <div>
                        <h3>
                            In the past 14 days, which country have you been to?
                        </h3><br />
                        <Field id='history' as='textarea' name='history' />
                    </div>
                    <div>
                        <h3>
                            In the past 14 days, have you had any of the following symptoms?
                        </h3>
                        <label>
                            <Field value='fever' type='checkbox' name='signal' />
                            Fever
                        </label><br />
                        <label>
                            <Field value='cough' type='checkbox' name='signal' />
                            Cough
                        </label><br />
                        <label>
                            <Field value='breathlessness' type='checkbox' name='signal' />
                            Breathlessness
                        </label><br />
                        <label>
                            <Field value='pneumonia' type='checkbox' name='signal' />
                            Pneumonia
                        </label><br />
                        <label>
                            <Field value='sore' type='checkbox' name='signal' />
                            Sore throat
                        </label><br />
                        <label>
                            <Field value='tired' type='checkbox' name='signal' />
                            Tired
                        </label>
                    </div>
                    <div>
                        <h3>
                            Within the past 14 days, have you been exposed to?
                        </h3>
                        <label>
                            <Field value='suspected' type='checkbox' name='contact' />
                            Patients with or suspected of having Covid-19
                        </label><br />
                        <label>
                            <Field value='countries' type='checkbox' name='contact' />
                            People from countries with Covid-19 disease
                        </label><br />
                        <label>
                            <Field value='symptoms' type='checkbox' name='contact' />
                            People with symptoms (fever, cough, ...)
                        </label>
                    </div>
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </>
    )
}