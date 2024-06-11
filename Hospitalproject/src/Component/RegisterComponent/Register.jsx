import React from "react";
import Registerleft from "./Registerleft";
import Registerright from "./Registerright";


const Register=()=>{
    return(
        <div style={{width:'100vw',display:'flex'}}>
        <Registerright/>
        <Registerleft/>
       </div>
    )
}


export default Register;