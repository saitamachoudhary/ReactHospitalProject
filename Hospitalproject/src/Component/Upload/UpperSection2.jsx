import { Layout,Menu,Button} from "antd";
import {useNavigate} from 'react-router-dom';
const{Header}=Layout;


const UpperSection2=()=>{
  const navigate=useNavigate();
    const NavItem=[
        {key:1,label:'Home'},
        {key:2,label:'About us'},
        {key:3,label:'Services'},
        {key:5,label:'Contact us'},
      ]
      const NavItem2=[
        {key:2,label:<Button>...</Button>},
        {key:1,label:<Button type="primary" onClick={()=>navigate('/Register')}>CheckOut</Button>},
      ]

    return(
        <Header
        style={{
          position: 'sticky',
          top: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent:'space-between',
          backgroundColor:'white',
        }}
      >
        <div style={{flex:2}}>
          <div style={{display:'flex',alignItems:'center',lineHeight:'0px'}}>
            <img src="src\Component\Images\vecteezy_round-medical-cross-symbol-on-transparent-background_17178225 1.png" alt="" />
            <h3 style={{fontSize:'1.5rem'}}>HealthCare</h3>
          </div>
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={NavItem}
          style={{
            flex: 3,
            minWidth: 0,
          }}
        />
         <Menu
          mode="horizontal"
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