// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useFormik } from 'formik';
// import {
//     AutoComplete,
//     Button,
//     Cascader,
//     Checkbox,
//     Col,
//     Form,
//     Input,
//     InputNumber,
//     Row,
//     Select,
// } from 'antd';
// const { Option } = Select;

// const Registerleft = () => {
//     const [formDataArray, setFormDataArray] = useState(() => {
//         const existingData = localStorage.getItem('formDataArray');
//         return existingData ? JSON.parse(existingData) : [];
//     });

//     const prefixSelector = (
//         <Form.Item name="prefix" noStyle>
//             <Select
//                 style={{
//                     width: 70,
//                 }}
//             >
//                 <Option value="86">+86</Option>
//                 <Option value="87">+87</Option>
//             </Select>
//         </Form.Item>
//     );

//     const navigate = useNavigate();

//     const formik = useFormik({
//         initialValues: {
//             Name: '',
//             Email: '',
//             Password: '',
//             Phone: '',
//         },
//         onSubmit: values => {
//             const updatedFormDataArray = [...formDataArray, values];
//             localStorage.setItem('formDataArray', JSON.stringify(updatedFormDataArray));
//             setFormDataArray(updatedFormDataArray);
//             navigate('/Login');
//         },
//     });

//     return (
//         <div style={{ height: '', width: '60vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             <Form
//                 name="register"
//                 onFinish={formik.handleSubmit}
//                 initialValues={{
//                     residence: ['zhejiang', 'hangzhou', 'xihu'],
//                     prefix: '86',
//                 }}
//                 style={{
//                     maxWidth: 600,
//                 }}
//                 scrollToFirstError
//             >
//                 <h1>Register Your Account</h1>
//                 <p style={{ color: '#C4C3C3', fontSize: '14px' }}>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aperiam nemo obcaecati sit impedit, eos temporibus dignissimos sed
//                 </p>
//                 <Form.Item
//                     label="Name"
//                     name="name"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input your Name!',
//                         },
//                     ]}
//                 >
//                     <Input id='Name' name='Name' type='text' onChange={formik.handleChange} value={formik.values.Name} />
//                 </Form.Item>
//                 <Form.Item
//                     label="E-mail"
//                     name='email'
//                     rules={[
//                         {
//                             type: 'email',
//                             message: 'The input is not valid E-mail!',
//                         },
//                         {
//                             required: true,
//                             message: 'Please input your E-mail!',
//                         },
//                     ]}
//                 >
//                     <Input id='Email' name='Email' type='email' onChange={formik.handleChange} value={formik.values.Email} />
//                 </Form.Item>

//                 <Form.Item
//                     name="password"
//                     label="Password"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input your password!',
//                         },
//                     ]}
//                     hasFeedback
//                 >
//                     <Input.Password id='Password' name='Password' type='password' onChange={formik.handleChange} value={formik.values.Password} />
//                 </Form.Item>

//                 <Form.Item
//                     name="phone"
//                     label="Phone Number"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input your phone number!',
//                         },
//                     ]}
//                 >
//                     <Input
//                         addonBefore={prefixSelector}
//                         style={{
//                             width: '100%',
//                         }}
//                         id='Phone' name='Phone' type='number' onChange={formik.handleChange} value={formik.values.Phone}
//                     />
//                 </Form.Item>

//                 <Form.Item label='If you have old prescription please upload(optional)'>
//                     <Button><Link to='/Upload'>Upload</Link></Button>
//                 </Form.Item>

//                 <Form.Item
//                     name="agreement"
//                     valuePropName="checked"
//                     rules={[
//                         {
//                             validator: (_, value) =>
//                                 value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
//                         },
//                     ]}
//                 >
//                     <Checkbox>
//                         I have read the <a href="">agreement</a>
//                     </Checkbox>
//                 </Form.Item>
//                 <Form.Item>
//                     <Button type="primary" htmlType="submit">
//                         Register
//                     </Button>
//                 </Form.Item>
//                 <div className='line' style={{ width: '100%', height: '1px', backgroundColor: '#E4E2E2' }}></div>
//                 <p>Or Connect with social account</p>
//                 <Form.Item style={{ display: 'flex' }}>
//                     <Button style={{ padding: '16px 40px', fontSize: '15px' }}>Google</Button>
//                     <Button style={{ marginLeft: '10px', padding: '16px 40px', fontSize: '15px' }}>Facebook</Button>
//                 </Form.Item>
//                 <p>Already have an account<Link to='/Login' style={{ color: '#00B934', marginLeft: '2px' }}>Login</Link></p>
//             </Form>
//         </div>
//     );
// };

// export default Registerleft;

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Button,
    Checkbox,
    Form,
    Result
} from 'antd';

const Registerleft = () => {
    const [formDataArray, setFormDataArray] = useState(() => {
        const existingData = localStorage.getItem('formDataArray');
        return existingData ? JSON.parse(existingData) : [];
    });

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            Name: '',
            Email: '',
            Password: '',
            Phone: '',
            Prescription:null,
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
            localStorage.removeItem('ImageDataArray');
            navigate('/Login');
        },
    });

    useEffect(() => {
        const savedFormData = localStorage.getItem('formData');
        const prescriptionData=JSON.parse(localStorage.getItem('ImageDataArray'));
        if (savedFormData) {
            const parsedFormdata=JSON.parse(savedFormData);
            formik.setValues({
                ...parsedFormdata,
                Prescription:prescriptionData||''
            })
        }
        else if(prescriptionData){
            formik.setFieldValue('PrescriptionData', prescriptionData);
        }

    }, []);

    const handleUploadClick = () => {
        localStorage.setItem('formData', JSON.stringify(formik.values));
        navigate('/Upload');
    };

    return (
        <div style={{ height: '', width: '60vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                    type="number"
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
                    <Form.Item label='If you have old prescription please upload(optional)'>
                    {formik.values.Prescription?<Result status="success"/>:<Button onClick={handleUploadClick}>Upload</Button>}
                </Form.Item>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                    ]}
                >
                    <Checkbox>
                        I have read the <a href="">agreement</a>
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
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
