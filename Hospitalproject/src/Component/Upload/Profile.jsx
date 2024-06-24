
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
const Profile = () => (
  <Space size={16} wrap>
    <Avatar
      style={{
        backgroundColor: '#87d068',
      }}
      icon={<UserOutlined />}
    />
  </Space>
);
export default Profile;