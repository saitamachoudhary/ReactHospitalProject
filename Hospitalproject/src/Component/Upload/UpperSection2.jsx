import React from "react";
import { Layout,Menu,Button} from "antd";
// import DropdownProfile from "./DropDownProfile";
import {Link} from 'react-router-dom'
// import DropDownDoc from "./DropDownDoc";
const{Header}=Layout;


const UpperSection2=()=>{
    const NavItem=[
        {key:1,label:'Home'},
        {key:2,label:'About us'},
        {key:3,label:'Services'},
        // {key:4,label:<DropDownDoc/>},
        {key:5,label:'Contact us'},
      ]
      const NavItem2=[
        // {key:1,label:<a style={{color:'green'}}>Login</a>},
        {key:2,label:<Button>...</Button>},
        {key:1,label:<Button type="primary">CheckOut</Button>},
      ]

    return(
        <Header
        style={{
          position: 'sticky',
          top: 0,
        //   zIndex: 1,
        //   width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent:'space-between',
          backgroundColor:'white',
        //   padding:'0 30px',
        //   boxShadow:'box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
        }}
      >
        <div style={{flex:2}}>
          <div style={{display:'flex',alignItems:'center',lineHeight:'0px'}}>
            <img src="src\Component\Images\vecteezy_round-medical-cross-symbol-on-transparent-background_17178225 1.png" alt="" />
            <h3 style={{fontSize:'1.5rem'}}>HealthCare</h3>
          </div>
        </div>
        <Menu
          // theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={NavItem}
          style={{
            flex: 3,
            minWidth: 0,
          }}
        />
         <Menu
          // theme="dark"
          mode="horizontal"
          // defaultSelectedKeys={['2']}
          items={NavItem2}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
    )
}


export default UpperSection2;