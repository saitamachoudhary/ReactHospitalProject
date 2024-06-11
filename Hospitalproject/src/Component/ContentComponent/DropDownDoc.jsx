import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    label: <a>Dr Abhinav Choudhary</a>,
    key: '0',
  },
  {
    type: 'divider',
  },
  {
    label: <a>Dr Sitama</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: <a>Dr Naruto Uzamaki</a>,
    key: '3',
  },
];
const DropDownDoc = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Doctor
      </Space>
    </a>
  </Dropdown>
);
export default DropDownDoc;