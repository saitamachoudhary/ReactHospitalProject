import React, { useState } from 'react';
import { useNavigate,Link} from 'react-router-dom';
import { useFormik } from 'formik';
import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
} from 'antd';
const { Option } = Select;
const Registerleft = () => {
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          Name: '',
          Email:'',
          Password:'',
          Phone:'',
        },
        onSubmit: values => {
        //   alert(JSON.stringify(values, null, 2));
        localStorage.setItem('formData',JSON.stringify(values));
          navigate('/Login');
        },
      });
    return (
        <div style={{ height: '', width: '60vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Form
                name="register"
                onFinish={formik.handleSubmit}
                initialValues={{
                    residence: ['zhejiang', 'hangzhou', 'xihu'],
                    prefix: '86',
                }}
                style={{
                    maxWidth: 600,
                }}
                scrollToFirstError
            >
                <h1>Login To Your Account</h1>
                <p style={{ color: '#C4C3C3', fontSize: '14px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aperiam nemo obcaecati sit impedit, eos temporibus dignissimos sed</p>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Name!',
                        },
                    ]}>
                    <Input id='Name' name='Name' type='text' onChange={formik.handleChange} value={formik.values.Name}/>
                </Form.Item>
                <Form.Item
                    label="E-mail"
                    name='email'
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input id='Email' name='Email' type='email' onChange={formik.handleChange} value={formik.values.Email} />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password id='Password' name='Password' type='password' onChange={formik.handleChange} value={formik.values.Password}/>
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input
                        addonBefore={prefixSelector}
                        style={{
                            width: '100%',
                        }}
                        id='Phone' name='Phone' type='number' onChange={formik.handleChange} value={formik.values.Phone}
                    />
                </Form.Item>

                {/* <Form.Item
                    label="Gender"
                    rules={[
                        {
                            required: true,
                            message: 'Please select gender!',
                        },
                    ]}
                >
                    <Select placeholder="select your gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Form.Item> */}

                <Form.Item label='If you have old prescription please upload(optional)'>
                    <Button>Upload</Button>
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
                    // {...tailFormItemLayout}
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
                <div className='line' style={{ width: '100%', height: '1px', backgroundColor: '#E4E2E2' }}></div>
                <p>Or Connect with social account</p>
                <Form.Item style={{ display: 'flex' }}>
                    <Button style={{ padding: '16px 40px', fontSize: '15px' }}>Google</Button>
                    <Button style={{ marginLeft: '10px', padding: '16px 40px', fontSize: '15px' }}>Facebook</Button>
                </Form.Item>
                {/* <p>Already have an account<a style={{ color: '#00B934', marginLeft: '2px' }}>Login</a></p> */}
                <p>Already have an account<Link to='/Login' style={{ color: '#00B934', marginLeft: '2px' }}>Login</Link></p>
            </Form>
        </div>

    );
};
export default Registerleft;