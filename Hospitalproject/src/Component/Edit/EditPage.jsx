
import { useNavigate,useLocation} from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Button,
    Checkbox,
    Form,
} from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Edit = () => {
    const navigate=useNavigate();
    const location=useLocation();
    const user=location.state;
    const prescriptionData=useSelector(state=> state.registerReducer.Prescription)||null;
    const [retrieveData, setretrieveData] = useState(() => {
        const existingData = localStorage.getItem('formDataArray');
        return existingData ? JSON.parse(existingData).find((val)=>val.id===user) : null;
    })
    
    const formik = useFormik({
        initialValues: {
            id:retrieveData.id,
            Name: retrieveData.Name,
            Email: retrieveData.Email,
            Password: retrieveData.Password,
            Phone: retrieveData.Phone,
            Prescription: (prescriptionData!==null)?prescriptionData:retrieveData.Prescription,
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
           const existingData=localStorage.getItem('formDataArray');
           let formDataArray=existingData?JSON.parse(existingData):[];
           const userIndex=formDataArray.findIndex((val)=>val.id===user);
           if(userIndex!==-1){
            formDataArray[userIndex]=values;
            localStorage.setItem('formDataArray', JSON.stringify(formDataArray));
            localStorage.removeItem('loginData');
            navigate('/Login');
           }
           else{
            alert('falied to do that');
           }
         },
    });
    return <div style={{ height: '100vh', width: '100%', }}>
        <Form
            name="register"
            onFinish={formik.handleSubmit}
            style={{
                maxWidth: 600,
                margin: '0 auto'
            }}
            scrollToFirstError
        >
            <h1 style={{ textAlign: 'center' }}>Edit Your Account Details</h1>
            <div style={{ maxWidth: '600px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: 'white' }}>
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
                    <Button onClick={()=>navigate('/Upload',{state:{pres:retrieveData.Prescription,id:user}})}>Upload</Button>
                    {formik.values.Prescription && formik.values.Prescription.map((val, index) => {
                        return <p key={index}>{val.file}</p>
                    })}
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
                        Submit
                    </Button>
                </Form.Item>
            </div>
        </Form>
    </div>
}


export default Edit;