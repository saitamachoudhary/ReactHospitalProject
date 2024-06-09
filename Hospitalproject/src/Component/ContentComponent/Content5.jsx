import React from "react";
import { Flex } from "antd";
const Content5=()=>{
    return (
        <Flex justify="space-around" align="">
            <div style={{display:'flex',alignItems:'center',lineHeight:'0px'}}>
            <img src="src\Component\Images\vecteezy_round-medical-cross-symbol-on-transparent-background_17178225 1.png" alt="" />
            <h3 style={{fontSize:'1.5rem'}}>HealthCare</h3>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
                <li style={{listStyleType: 'none', paddingLeft: '0',marginBottom:'5px'}}>FAQ</li>
                <li style={{listStyleType: 'none', paddingLeft: '0',marginBottom:'5px'}}>About us</li>
                <li style={{listStyleType: 'none', paddingLeft: '0',marginBottom:'5px'}}>Our Team</li>
                <li style={{listStyleType: 'none', paddingLeft: '0',marginBottom:'5px'}}>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h3>Our Links</h3>
            <ul>
                <li style={{listStyleType: 'none', paddingLeft: '0',marginBottom:'5px'}}>Support Center</li>
                <li style={{listStyleType: 'none', paddingLeft: '0',marginBottom:'5px'}}>Feedback</li>
                <li style={{listStyleType: 'none', paddingLeft: '0',marginBottom:'5px'}}>Appointment</li>
            </ul>
          </div>
          <div>
            <h3>Contact us</h3>
            <ul>
                <li style={{listStyleType: 'none', paddingLeft: '0',marginBottom:'5px'}}>+123 456 789</li>
                <li style={{listStyleType: 'none', paddingLeft: '0',marginBottom:'5px'}}>24*7</li>
                <li style={{listStyleType: 'none', paddingLeft: '0',marginBottom:'5px'}}>healthcare@example.com</li>
                <li style={{listStyleType: 'none', paddingLeft: '0',marginBottom:'5px'}}>Hidden leaf village</li>
            </ul>
          </div>
        </Flex>
    )
}

export default Content5;