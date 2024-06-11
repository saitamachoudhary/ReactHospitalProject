import React from 'react';
import Loginright from './Loginright';
import Loginleft from './Loginleft';
const Login = () => {
  return (
     <div style={{height:'100vh',width:'100vw',display:'flex'}}>
      <Loginright/>
      <Loginleft/>
     </div>
  );
};
export default Login;