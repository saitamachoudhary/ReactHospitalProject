import './App.css';
import {Layout,theme } from 'antd';
const {Content, Footer } = Layout;
// import { useLocation } from 'react-router-dom';
import Headernav from './Component/ContentComponent/Header';
import Content1 from './Component/ContentComponent/Content1';
import Content2 from './Component/ContentComponent/Content2';
import Content3 from './Component/ContentComponent/Content3';
import Content4 from './Component/ContentComponent/Content4';
import Content5 from './Component/ContentComponent/Content5';
// import { UserProvider } from './Component/Hook/UserContext';
const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (

    <Layout>
      <Headernav/>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Content1/>
          <Content2/>
          <Content3/>
          <Content4/>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
      <Content5/>
      </Footer>
    </Layout>

  );
};
export default App;
