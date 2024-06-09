import React from 'react';
import {Layout,theme,Col,Row,Button, Card, Flex, Typography } from 'antd';
import Loginright from './Loginright';
const {Content} = Layout;
const Login = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const cardStyle = {
    width: 1360,
  };
  const imgStyle = {
    display: 'block',
    width: 500,
    height:745
  };
  return (
    <Layout>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
       <Card
    hoverable
    style={cardStyle}
    styles={{
      body: {
        padding: 0,
        overflow: 'hidden',
      },
    }}
  >
    <Flex justify="space-between">
      <Loginright/>
      <Flex
        vertical
        align="flex-end"
        justify="space-between"
        style={{
          padding: 32,
        }}
      >
        <Typography.Title level={3}>
          “antd is an enterprise-class UI design language and React UI library.”
        </Typography.Title>
        <Button type="primary" href="https://ant.design" target="_blank">
          Get Started
        </Button>
      </Flex>
    </Flex>
  </Card>

      </Content>
    </Layout>
  );
};
export default Login;