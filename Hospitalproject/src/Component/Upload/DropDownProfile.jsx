import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Profile from './Profile';
const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];
const DropDownProfile = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <Profile/>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default DropDownProfile;