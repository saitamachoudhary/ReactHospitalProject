import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    label:"English",
    key: '0',
  },
  {
    label:"Hindi",
    key: '1',
  },
  {
    label: 'Sanskrit',
    key: '3',
  },
];
const DropDownMenu = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        English
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default DropDownMenu;