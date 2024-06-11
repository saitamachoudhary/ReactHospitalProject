import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

const Loginleft = () => (
    <div style={{ height: '', width: '60vw',display:'flex',alignItems:'center',justifyContent:'center'}}>
       <Form
    name="basic"
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <h1>Login To Your Account</h1>
    <p style={{color:'#C4C3C3',fontSize:'14px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aperiam nemo obcaecati sit impedit, eos temporibus dignissimos sed</p>
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a style={{float:'right',color:'#00B934'}} href="">
          Forgot password
        </a>
      </Form.Item>

    <Form.Item
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
    <div className='line' style={{width:'100%',height:'1px',backgroundColor:'#E4E2E2'}}></div>
    <p>Or Connect with social account</p>
    <Form.Item style={{display:'flex'}}>
       <Button style={{padding:'16px 40px',fontSize:'15px'}}>Google</Button>
       <Button style={{marginLeft:'10px',padding:'16px 40px',fontSize:'15px'}}>Facebook</Button>
    </Form.Item>
    <p>Don't have an account yet?<a style={{color:'#00B934',marginLeft:'2px'}}>SignUp</a></p>
  </Form>
    </div>
);


export default Loginleft;