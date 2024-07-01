import Registerleft from "./Registerleft";
import Registerright from "./Registerright";


const Register=()=>{
    return(
        <div style={{minHeight:'100vh',display:'flex'}}>
        <Registerright/>
        <Registerleft/>
       </div>
    )
}


export default Register;