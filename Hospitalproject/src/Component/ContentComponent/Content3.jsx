import React from 'react';
import './../../App'
import { Button, Card, Flex, Typography } from 'antd';
import{ArrowRightOutlined} from '@ant-design/icons';

const Content3 = () => (
  <Card
    style={{ width: '100%', border: 'none' }}
    styles={{
      body: {
        padding: 0,
        // overflow: 'hidden',
      },
    }}
  >
    <div>
      <Flex
        align="center"
        justify="space-between"
        style={{
        //   width: '50%',
          padding: 32,
        }}
      >
        <div>
        <Typography.Title style={{ color: '#3758F9'}} level={3}>About us</Typography.Title>
          <Typography.Title style={{ fontSize: '55px', marginBottom: '0',marginTop:'0'}} level={1}>
            Expertly Crafted Every Smile
          </Typography.Title>
        </div>
        <Button style={{ marginTop: '10px', padding: '20px 30px' }} type="primary">
          Get Started <ArrowRightOutlined />
        </Button>
      </Flex>
     <Flex justify='space-evenly'>
     <div className='card' style={{ height: '300px', width: '350px',borderRadius: '50px', display: 'flex',flexDirection:'column' ,alignItems: 'center', justifyContent: 'center',border:'1px solid black',padding:'5px'}}>
        <h1>Proper Medical</h1>
        <p style={{textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, optio voluptatibus? Soluta provident, ratione nesciunt saepe, cupiditate quisquam facere unde, eveniet recusandae explicabo libero distinctio est nisi odit accusamus rerum!</p>
     </div>
     <div className='card' style={{ height: '300px', width: '350px',borderRadius: '50px', display: 'flex',flexDirection:'column' ,alignItems: 'center', justifyContent: 'center',border:'1px solid black',padding:'5px'}}>
        <h1>Proper Medical</h1>
        <p style={{textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, optio voluptatibus? Soluta provident, ratione nesciunt saepe, cupiditate quisquam facere unde, eveniet recusandae explicabo libero distinctio est nisi odit accusamus rerum!</p>
     </div>
     <div className='card' style={{ height: '300px', width: '350px',borderRadius: '50px', display: 'flex',flexDirection:'column' ,alignItems: 'center', justifyContent: 'center',border:'1px solid black',padding:'5px'}}>
        <h1>Proper Medical</h1>
        <p style={{textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, optio voluptatibus? Soluta provident, ratione nesciunt saepe, cupiditate quisquam facere unde, eveniet recusandae explicabo libero distinctio est nisi odit accusamus rerum!</p>
     </div>
     </Flex>
    </div>
  </Card>
);
export default Content3;