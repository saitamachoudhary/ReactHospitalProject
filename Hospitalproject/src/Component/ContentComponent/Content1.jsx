import { Button, Card, Flex, Typography } from 'antd';

const Content1 = () => (
  <Card
    style={{ width: '100%', border: 'none' }}
    styles={{
      body: {
        padding: 0,
        // overflow: 'hidden',
      },
    }}
  >
    <Flex justify="space-around" align='flex-end'>
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
          <Typography.Title style={{ fontSize: '55px', marginBottom: '0' }} level={1}>
            We Care About
          </Typography.Title>
          <Typography.Title style={{ fontSize: '55px', marginTop: '0' }} level={1}>
            your health issues.
          </Typography.Title>
          <p style={{}}>Lorem ipsum dolor sit amet. Ex tenetur officia aut atque inventore
            qui molestiae iusto est alho libero adipisci aut numquam minus et diss.
            Est voluptas fugiat quo alve iste.Elsto beng up hose toh al despasito alberto dolrado hup pupe.</p>
        </div>
        <Button style={{ marginTop: '10px', padding: '17px 15px' }} type="primary">
          Get Started
        </Button>
        {/* ///// */}
        <div style={{ width: '50%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
          <div className="div1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="innerdiv11">
              <img style={{ width: '26px' }} src="src\Component\Images\phone-icon-938 1.png" alt="" />
            </div>
            <div className="innerdiv12">
              <Typography.Title style={{ fontSize: '14px' }}>Phone Number</Typography.Title>
              <Typography.Title style={{ fontSize: '14px', marginTop: '0' }}>+123 456 789</Typography.Title>
            </div>
          </div>
          <div className="div2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="innerdiv21">
              <img style={{ width: '26px' }} src="src\Component\Images\on-time-icon 1.png" alt="" />
            </div>
            <div className="innerdiv22">
              <Typography.Title style={{ fontSize: '14px' }}>Open Everyday</Typography.Title>
              <Typography.Title style={{ fontSize: '14px', marginTop: '0' }} level={5}>24*7</Typography.Title>
            </div>
          </div>
        </div>
      </Flex>

      <div style={{ height: '350px', width: '400px', backgroundColor: '#3758F9', borderRadius: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          alt="avatar"
          src="src\Component\Images\Lovepik_com-380083382-medical-doctor-and-nurse-operating-clothes-nurses-clothing-nurse-cartoons 1.png"
          style={{ width: 500, marginBottom: '53px' }}
        />
      </div>
    </Flex>
  </Card>
);
export default Content1;