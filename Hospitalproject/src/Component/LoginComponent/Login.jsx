import Loginright from './Loginright';
import Loginleft from './Loginleft';
const Login = () => {
  return (
     <div style={{display:'flex',minHeight:"100vh"}}>
      <Loginright/>
      <Loginleft/>
     </div>
  );
};
export default Login;