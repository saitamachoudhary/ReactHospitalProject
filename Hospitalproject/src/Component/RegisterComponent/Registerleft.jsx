import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { registerUserInput, handleDeletePrescription,handleEmptyuser} from '../../Store/UserInputSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from '@reduxjs/toolkit';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Form } from 'antd';

const Registerleft = () => {
    const [formDataArray, setFormDataArray] = useState(() => {
        const existingData = localStorage.getItem('formDataArray');
        return existingData ? JSON.parse(existingData) : [];
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInputData = useSelector(state => state.userinputReducer.user);

    const formik = useFormik({
        initialValues: {
            id: nanoid(),
            Name: userInputData.Name || '',
            Email: userInputData.Email || '',
            Password: userInputData.Password || '',
            Phone: userInputData.Phone || '',
            Prescription: userInputData.Prescription || [],
        },
        validationSchema: Yup.object({
            Name: Yup.string()
                .required('Username is required')
                .min(3, 'Username must be at least 3 characters'),
            Email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            Password: Yup.string()
                .required('Password is required')
                .min(8, 'Password must be at least 8 characters'),
            Phone: Yup.string()
                .required('Phone number is required')
                .matches(/^[0-9]+$/, 'Phone number must be numeric')
                .min(10, 'Phone number must be at least 10 digits'),
        }),
        onSubmit: values => {
            const updatedFormDataArray = [...formDataArray, values];
            localStorage.setItem('formDataArray', JSON.stringify(updatedFormDataArray));
            setFormDataArray(updatedFormDataArray);
            localStorage.removeItem('formData');
            dispatch(handleEmptyuser());
            navigate('/Login');
        },
    });

    const handleUploadClick = () => {
        dispatch(registerUserInput(formik.values));
        navigate('/Upload');
    };

    const handleDeleteClick = (id) => {
        dispatch(handleDeletePrescription(id));
        const updatedPrescription = formik.values.Prescription.filter(item => item.id !== id);
        formik.setFieldValue('Prescription', updatedPrescription);
    };

    return (
        <div style={{ width: '60vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Form
                name="register"
                onFinish={formik.handleSubmit}
                style={{
                    maxWidth: 600,
                }}
                scrollToFirstError
            >
                <h1>Register Your Account</h1>
                <p style={{ color: '#C4C3C3', fontSize: '14px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aperiam nemo obcaecati sit impedit, eos temporibus dignissimos sed
                </p>
                <div style={{ maxWidth: '600px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="Name" style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
                        <input
                            type="text"
                            name="Name"
                            id="Name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Name}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                        {formik.touched.Name && formik.errors.Name ? (
                            <div style={{ color: 'red', marginTop: '5px' }}>{formik.errors.Name}</div>
                        ) : null}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="Email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                        <input
                            type="email"
                            name="Email"
                            id="Email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Email}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                        {formik.touched.Email && formik.errors.Email ? (
                            <div style={{ color: 'red', marginTop: '5px' }}>{formik.errors.Email}</div>
                        ) : null}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="Password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
                        <input
                            type="password"
                            name="Password"
                            id="Password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Password}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                        {formik.touched.Password && formik.errors.Password ? (
                            <div style={{ color: 'red', marginTop: '5px' }}>{formik.errors.Password}</div>
                        ) : null}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="Phone" style={{ display: 'block', marginBottom: '5px' }}>Phone:</label>
                        <input
                            type="text"
                            name="Phone"
                            id="Phone"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Phone}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                        {formik.touched.Phone && formik.errors.Phone ? (
                            <div style={{ color: 'red', marginTop: '5px' }}>{formik.errors.Phone}</div>
                        ) : null}
                    </div>
                    <Form.Item label='If you have old prescription please upload (optional)'>
                        {formik.values.Prescription.length === 0 ? (
                            <Button onClick={handleUploadClick}>Upload</Button>
                        ) : (
                            formik.values.Prescription.map((val, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                    <p>{val.file}</p>
                                    <DeleteOutlined style={{ marginLeft: '10px' }} onClick={() => handleDeleteClick(val.id)} />
                                </div>
                            ))
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={
                                formik.values.Email &&
                                formik.values.Name &&
                                formik.values.Password &&
                                formik.values.Phone&&formik.values.Prescription!==null
                                    ? {}
                                    : { background: 'gray' }
                            }
                        >
                            Register
                        </Button>
                    </Form.Item>
                </div>
                <div className='line' style={{ width: '100%', height: '1px', backgroundColor: '#E4E2E2' }}></div>
                <p>Or Connect with social account</p>
                <Form.Item style={{ display: 'flex' }}>
                    <Button style={{ padding: '16px 40px', fontSize: '15px' }}>Google</Button>
                    <Button style={{ marginLeft: '10px', padding: '16px 40px', fontSize: '15px' }}>Facebook</Button>
                </Form.Item>
                <p>Already have an account<Link to='/Login' style={{ color: '#00B934', marginLeft: '2px' }}>Login</Link></p>
            </Form>
        </div>
    );
};

export default Registerleft;
