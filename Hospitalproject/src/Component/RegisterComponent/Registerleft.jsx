import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { registerUserInput, handleDeletePrescription, handleEmptyuser } from '../../Store/UserInputSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from '@reduxjs/toolkit';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Form, Col, Divider, Row,message} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Registerleft = () => {
    const [state, setstate] = useState([]);
    const [city, setcity] = useState([]);
    const [showPassword, setShowPassword] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        fetch('https://countriesnow.space/api/v0.1/countries/states', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                country: 'India'
            }),
        })
            .then(response => response.json())
            .then(data => {
                setstate(data.data.states);
            })
            .catch(error => {
                console.log(error)
            });
    }, []);


    const [formDataArray, setFormDataArray] = useState(() => {
        const existingData = localStorage.getItem('formDataArray');
        return existingData ? JSON.parse(existingData) : [];
    });

    const success = () => {
        messageApi.open({
            type: 'success',
          content: 'Successfull Registration',
        });
      };

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
            City: userInputData.City || '',
            State: userInputData.State || '',
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
                .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
                .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
                .matches(/[0-9]/, 'Password must contain at least one number')
                .matches(/[@$!%*?&]/, 'Password must contain at least one special character')
                .max(15, 'Password must not exceed 15 characters'),
            Phone: Yup.string()
                .required('Phone number is required')
                .matches(/^[0-9]+$/, 'Phone number must be numeric')
                .min(10, 'Phone number must be at least 10 digits')
                .max(10, 'Phone number must be at most 10 digits'),
            City: Yup.string().required('City is required'),
            State: Yup.string().required('State is required'),
        }),
        onSubmit: values => {
            const updatedFormDataArray = [...formDataArray, values];
            localStorage.setItem('formDataArray', JSON.stringify(updatedFormDataArray));
            setFormDataArray(updatedFormDataArray);
            localStorage.removeItem('formData');
            dispatch(handleEmptyuser());
            success();
            setTimeout(() => {
                navigate('/Login');
              }, 1000);
        },
    });

    useEffect(() => {
        fetch('https://countriesnow.space/api/v0.1/countries/state/cities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                country: 'India',
                state: formik.values.State
            }),
        })
            .then(response => response.json())
            .then(data => {
                setcity(data.data)
            })
            .catch(error => {
                alert(error)
            });
    }, [formik.values.State]);

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
        <div style={{ width: '60vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Form
                name="register"
                onFinish={formik.handleSubmit}
                style={{
                    maxWidth: 600,
                }}
                scrollToFirstError
            >
                <h1 style={{margin:'0px'}}>Register Your Account</h1>
                <p style={{ color: '#C4C3C3', fontSize: '14px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aperiam nemo obcaecati sit impedit, eos temporibus dignissimos sed
                </p>
                <div style={{ maxWidth: '600px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', height: '400px', overflow: 'auto' }}>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="Name" style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
                        <input
                            type="text"
                            name="Name"
                            id="Name"
                            placeholder='ex:Abc'
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
                            placeholder='ex:@example.com'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Email}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                        {formik.touched.Email && formik.errors.Email ? (
                            <div style={{ color: 'red', marginTop: '5px' }}>{formik.errors.Email}</div>
                        ) : null}
                    </div>
                    <div style={{ marginBottom: '15px', position: 'relative'}}>
                        <label htmlFor="Password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="Password"
                            id="Password"
                            maxLength='25'
                            placeholder='ex:@123Abc!#'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Password}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                        <span
                            onClick={() => {
                                setShowPassword(!showPassword);
                              }}
                            style={{
                                position: 'absolute',
                                right: '10px',
                                // top: '50%',
                                transform: 'translateY(30%)',
                                cursor: 'pointer',
                            }}
                        >
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </span>
                        {formik.touched.Password && formik.errors.Password ? (
                            <div style={{ color: 'red', marginTop: '5px' }}>{formik.errors.Password}</div>
                        ) : null}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="Phone" style={{ display: 'block', marginBottom: '5px' }}>Phone:</label>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ padding: '8px', background: '#eee' }}>+91</span>
                            <input
                                type="text"
                                name="Phone"
                                id="Phone"
                                placeholder='1234567890'
                                maxLength="10"
                                // onChange={formik.handleChange}
                                onChange={(e) => {
                                    const re = /^[0-9\b]+$/;
                                    if (e.target.value === '' || re.test(e.target.value)) {
                                        formik.handleChange(e);
                                    }
                                }}
                                onBlur={formik.handleBlur}
                                value={formik.values.Phone}
                                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                            />
                        </div>
                        {formik.touched.Phone && formik.errors.Phone ? (
                            <div style={{ color: 'red', marginTop: '5px' }}>{formik.errors.Phone}</div>
                        ) : null}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="State" style={{ display: 'block', marginBottom: '5px' }}>State:</label>
                        <select
                            name="State"
                            id="State"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.State}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        >
                            <option value="">Select State</option>
                            {state.map((state, index) => (
                                <option key={index} value={state.name}>
                                    {state.name}
                                </option>
                            ))}
                        </select>

                        {formik.touched.State && formik.errors.State ? (
                            <div style={{ color: 'red', marginTop: '5px' }}>{formik.errors.State}</div>
                        ) : null}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="City" style={{ display: 'block', marginBottom: '5px' }}>City:</label>
                        <select
                            name="City"
                            id="City"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.City}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        >
                            <option value="">Select City</option>
                            {Array.isArray(city) && city.map((cty, index) => {
                                return <option key={index} value={cty}>{cty}</option>
                            })}
                        </select>
                        {formik.touched.City && formik.errors.City ? (
                            <div style={{ color: 'red', marginTop: '5px' }}>{formik.errors.City}</div>
                        ) : null}
                    </div>


                    {formik.values.Prescription.length === 0 ? (
                        <Form.Item label='If you have old prescription please upload (optional)'>
                            <Button onClick={handleUploadClick}>Upload</Button>
                        </Form.Item>
                    ) : (
                        <>
                            <Divider orientation="left">File</Divider>
                            {
                                formik.values.Prescription.map((val) => (
                                    <>
                                        <Row>
                                            <Col span={8}>{val.file.length > 20 ? `${val.file.substring(0, 20)}...` : val.file}</Col>
                                            <Col span={8} offset={8} style={{ textAlign: 'right' }}>
                                                <DeleteOutlined style={{ marginLeft: '10px' }} onClick={() => handleDeleteClick(val.id)} />
                                            </Col>
                                        </Row>
                                        <hr style={{ border: 'none', height: '1px', backgroundColor: '#f2f2f2', margin: '20px 0' }} />
                                    </>
                                ))
                            }
                        </>
                    )}

                    <Form.Item>
                    {contextHolder}
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={
                                formik.values.Email &&
                                    formik.values.Name &&
                                    formik.values.Password &&
                                    formik.values.Phone && formik.values.City && formik.values.State
                                    && formik.values.Prescription !== null
                                    ? {}
                                    : { background: 'gray' }
                            }
                        >
                            Register
                        </Button>
                    </Form.Item>
                </div>
                {/* <div className='line' style={{ width: '100%', height: '1px', backgroundColor: '#E4E2E2' }}></div> */}
                <p>Or Connect with social account</p>
                <Form.Item style={{ display: 'flex',marginBottom:"0px"}}>
                    <Button style={{ padding: '16px 40px', fontSize: '15px' }}>Google</Button>
                    <Button style={{ marginLeft: '10px', padding: '16px 40px', fontSize: '15px'}}>Facebook</Button>
                </Form.Item>
                <p>Already have an account<Link to='/Login' style={{ color: '#00B934', marginLeft: '2px' }}>Login</Link></p>
            </Form>
        </div>
    );
};

export default Registerleft;
