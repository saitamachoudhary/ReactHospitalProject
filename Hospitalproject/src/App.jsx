import './App.css'

import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
const NavItem=[
  {key:1,label:'Home'},
  {key:2,label:'About us'},
  {key:3,label:'Services'},
  {key:4,label:'Doctors'},
  {key:5,label:'Contact us'},
]
const NavItem2=[
  {key:1,label:<a style={{color:'green'}}>Login</a>},
  {key:2,label:<a style={{color:'blue'}}>Register</a>}
]
const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent:'space-between',
          backgroundColor:'white'
        }}
      >
        <div style={{flex:2}}>
          <div style={{display:'flex',alignItems:'center'}}>
            <img src="src\Component\Images\vecteezy_round-medical-cross-symbol-on-transparent-background_17178225 1.png" alt="" />
            <h3>HealthCare</h3>
          </div>
        </div>
        <Menu
          // theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={NavItem}
          style={{
            flex: 3,
            minWidth: 0,
          }}
        />
         <Menu
          // theme="dark"
          mode="horizontal"
          // defaultSelectedKeys={['2']}
          items={NavItem2}
          style={{
            flex: 0.7,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App;
