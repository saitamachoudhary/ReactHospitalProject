import { useNavigate, useLocation} from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Form ,Col, Divider, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerUserInput, handleDeletePrescription,handleEmptyuser} from '../../Store/UserInputSlice';
import { StepBackwardOutlined, DeleteOutlined} from '@ant-design/icons';

const Edit = () => {
    const [stateList, setStateList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const user = location.state.id;
    const [retrieveData,setretrieveData]=useState(()=>{
     const existingData=localStorage.getItem('formDataArray');
      return existingData?JSON.parse(existingData).find((us)=>us.id===user):[]
    })

     location.state.boolean?dispatch(registerUserInput(retrieveData)):"";

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
            setStateList(data.data.states);
        })
        .catch(error => {
          console.log(error)
        });
      }, []);

 
    const userEditData = useSelector(state => state.userinputReducer.user);
    const formik = useFormik({
        initialValues: {
            id: userEditData.id||'',
            Name: userEditData.Name,
            Email:userEditData.Email||'',
            Password: userEditData.Password,
            Phone: userEditData.Phone,
            Prescription:userEditData.Prescription ||[],
            City: userEditData.City||'',
            State: userEditData.State||'',
        },
        enableReinitialize: true,
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
            City: Yup.string().required('City is required'),
            State: Yup.string().required('State is required'),
        }),
        onSubmit: values => {
            const existingData = localStorage.getItem('formDataArray');
            let formDataArray = existingData ? JSON.parse(existingData) : [];
            const userIndex = formDataArray.findIndex((val) => val.id === userEditData.id);
            if (userIndex !== -1) {
                formDataArray[userIndex] = values;
                localStorage.setItem('formDataArray', JSON.stringify(formDataArray));
                localStorage.setItem('loginData', JSON.stringify({ id: values.id, em: values.Email, name: values.Name, ph: values.Phone, prescription: values.Prescription }));
                if (userEditData.Email !== formik.values.Email || userEditData.Password !== formik.values.Password) {
                    localStorage.removeItem('loginData');
                    navigate('/Login');
                } else {
                    navigate('/');
                    dispatch(handleEmptyuser())
                }
            } else {
                alert('Failed to update the data');
            }
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
            setCityList(data.data)
        })
        .catch(error => {
          alert(error)
        });
      }, [formik.values.State]);

    const handleDeleteClick = (id) => {
        dispatch(handleDeletePrescription(id));
        const updatedPrescription = formik.values.Prescription.filter(item => item.id !== id);
        formik.setFieldValue('Prescription', updatedPrescription);
    };

    const handleUploadclick=()=>{
     dispatch(registerUserInput(formik.values));
     navigate('/Upload',{state:{id:user,boolean:location.state.boolean,boolean2:location.state.boolean2}})
    }

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <Form
                name="register"
                onFinish={formik.handleSubmit}
                style={{
                    maxWidth: 600,
                    margin: '0 auto',
                }}
                scrollToFirstError
            >
                <StepBackwardOutlined style={{position:'absolute',top:'33px',fontSize:'20px'}} onClick={() => navigate('/')}/>
                <h1 style={{ textAlign: 'center' }}>Edit Your Account Details</h1>
                {/* <Button onClick={() => navigate('/')}><StepBackwardOutlined /> Back</Button> */}
                <div style={{ maxWidth: '600px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: 'white' }}>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="Name" style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
                        <input
                            type="text"
                            name="Name"
                            id="Name"
                             placeholder='ex:Abhinav Choudhary'
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
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="Password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
                        <input
                            type="password"
                            name="Password"
                            id="Password"
                            placeholder='ex:@123Abc!#'
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
                       <div  style={{ display: 'flex', alignItems: 'center' }}>
                       <span style={{ padding: '8px', background: '#eee'}}>+91</span>
                       <input
                            type="text"
                            name="Phone"
                            id="Phone"
                             placeholder='ex:1234567890'
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
                            {stateList.map((state, index) => (
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
                            {cityList.map((city, index) => (
                                <option key={index} value={city}>{city}</option>
                            ))}
                        </select>
                        {formik.touched.City && formik.errors.City ? (
                            <div style={{ color: 'red', marginTop: '5px' }}>{formik.errors.City}</div>
                        ) : null}
                    </div>
                  
                    <Form.Item label="If you have an old prescription, please upload (optional)">
                        <Button onClick={handleUploadclick}>Upload</Button>
                    </Form.Item>
                    {formik.values.Prescription.length === 0 ? (
                        null
                    ) : (
                        <>
                            <Divider orientation="left">File</Divider>
                            {
                                formik.values.Prescription.map((val, index) => (
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
                            Submit
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
};

export default Edit;
