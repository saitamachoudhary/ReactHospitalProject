import React from 'react';
import { Button, Card, Flex, Typography } from 'antd';

const Content2 = () => (
    <Card
        style={{ width: '100%', border: 'none' }}
        styles={{
            body: {
                padding: 0,
                // overflow: 'hidden',
            },
        }}
    >
        <Flex justify="space-around" align='center'>
            <div style={{ height: '350px', width: '400px', backgroundColor: '#3758F9', padding: '0px 0px', boxShadow: 'rgba(55, 88, 249, 1) 0px 7px 29px 0px' }}>
                <img
                    alt=""
                    src="src\Component\Images\3644547 1.png"
                    style={{ width: '100%', height: '100%', }}
                />
            </div>
            <Flex
                vertical
                align="flex-start"
                justify="space-between"
                style={{
                    width: '50%',
                    padding: 32,
                }}
            >
                <div>
                    <Typography.Title style={{ color: '#3758F9' }} level={3}>About us</Typography.Title>
                    <Typography.Title style={{ fontSize: '55px', marginBottom: '0', marginTop: '0' }} level={1}>
                        Your Trusted Doctor
                    </Typography.Title>
                    <Typography.Title style={{ fontSize: '55px', marginTop: '0' }} level={1}>
                        Is Available For You.
                    </Typography.Title>
                    <p>Lorem ipsum dolor sit amet. Ex tenetur officia aut atque inventore
                        qui molestiae iusto est alho libero adipisci aut numquam minus et diss.
                        Est voluptas fugiat quo alve iste.Elsto beng up hose toh al despasito alberto dolrado hup pupe.</p>
                </div>
                <div style={{display:'flex',padding:'0px 0px'}}>
                <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10px 25px', marginTop: '15px'}}>
                    <Typography.Title style={{ color: '#3758F9', marginTop: '0' }} level={4}>2981+</Typography.Title>
                    <p style={{ fontWeight: '500' }}>Happy Patients</p>
                </Card>
                <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding:'10px 25px',marginTop: '15px',marginLeft:'30px'}}>
                    <Typography.Title style={{ color: '#3758F9', marginTop: '0' }} level={4}>2981+</Typography.Title>
                    <p style={{ fontWeight: '500' }}>Happy Patients</p>
                </Card>
                </div>
            </Flex>
        </Flex>
    </Card>
);
export default Content2;