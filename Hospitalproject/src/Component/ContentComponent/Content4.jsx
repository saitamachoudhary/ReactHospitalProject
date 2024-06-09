import React from 'react';
import './../../App'
import { Button, Card, Flex, Typography } from 'antd';
const { Meta } = Card;
import { ArrowRightOutlined } from '@ant-design/icons';

const Content4 = () => (
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
                    <Typography.Title style={{ color: '#3758F9' }} level={3}>Our Team</Typography.Title>
                    <Typography.Title style={{ fontSize: '55px', marginBottom: '0', marginTop: '0' }} level={1}>
                        Meet Our Specialist
                    </Typography.Title>
                </div>
                <Button style={{ marginTop: '10px', padding: '20px 30px' }} type="primary">
                    Get Started <ArrowRightOutlined />
                </Button>
            </Flex>
            <Flex justify='space-evenly'>
                <Card
                    hoverable
                    style={{
                        width: 200,
                    }}
                    cover={<img style={{ width: '150px', margin: '0 auto' }} alt="" src="src\Component\Images\pngwing 1.png" />}
                >
                    <Meta title="Dr Abhinav Choudhary" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 200,
                    }}
                    cover={<img style={{ width: '150px', margin: '0 auto' }} alt="" src="src\Component\Images\pngwing 1.png" />}
                >
                    <Meta title="Dr Abhinav Choudhary" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 200,
                    }}
                    cover={<img style={{ width: '150px', margin: '0 auto' }} alt="" src="src\Component\Images\pngwing 1.png" />}
                >
                    <Meta title="Dr Abhinav Choudhary" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 200,
                    }}
                    cover={<img style={{ width: '150px', margin: '0 auto' }} alt="" src="src\Component\Images\pngwing 1.png" />}
                >
                    <Meta title="Dr Abhinav Choudhary" description="www.instagram.com" />
                </Card>
            </Flex>
        </div>
    </Card>
);
export default Content4;