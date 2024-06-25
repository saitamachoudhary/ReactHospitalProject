import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space,Button} from 'antd';
import PrescriptionModel from './PrescriptionModel';
import { useNavigate } from 'react-router-dom';

const DropdownProfile = () => {
    const[Data,setData]=React.useState(JSON.parse(localStorage.getItem("loginData")));
    const navigate=useNavigate();
    const items = [
        {
          label: <a>{Data.name}</a>,
          key: '0',
        },
        {
          label: <a>{Data.em}</a>,
          key: '1',
        },
        {
          label: <a>{Data.ph}</a>,
          key: '3',
        },
        {
          label:<PrescriptionModel/>
        },
        {
          label:<Button onClick={()=>{
            navigate('/Edit',{state:Data.id})
          }}>Edit Your Account</Button>
        },
        {
           label:<Button type='danger' onClick={()=>{
            const existingData=JSON.parse(localStorage.getItem('formDataArray')).filter((element)=>element.id!==Data.id);
            localStorage.setItem('formDataArray',JSON.stringify(existingData));
            localStorage.removeItem('loginData');
            location.reload();
           }}>Delete your Account</Button>
        },
        {
            label:<Button onClick={()=>{
              localStorage.removeItem("loginData");
                location.reload();
            }} style={{backgroundColor:'green',color:'white'}}>Logout</Button>
        }
      ];
  return(
    <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Profile
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
  )
};
export default DropdownProfile;