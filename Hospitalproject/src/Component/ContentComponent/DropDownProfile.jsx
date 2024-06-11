import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space,Button} from 'antd';

const DropdownProfile = () => {
    const[Data,setData]=React.useState(JSON.parse(localStorage.getItem("formData")));
    const items = [
        {
          label: <a>{Data.Name}</a>,
          key: '0',
        },
        {
          label: <a>{Data.Email}</a>,
          key: '1',
        },
        {
          label: <a>{Data.Phone}</a>,
          key: '3',
        },
        {
            label:<Button onClick={()=>{
                localStorage.clear();
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