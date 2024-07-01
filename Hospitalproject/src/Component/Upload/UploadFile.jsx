import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { registerUserInput } from '../../Store/UserInputSlice';
import { Button, Card, Popconfirm } from 'antd';
import { handleDeletePrescription } from '../../Store/UserInputSlice';
import { DeleteOutlined } from '@ant-design/icons';

function UploadFile() {
  const location = useLocation();
  const navigate = useNavigate();
  const fileData = useSelector(state => state.userinputReducer.user);
  const dispatch = useDispatch();


  function handleChange(e) {
    const fileObj = e.target.files[0];
    if (fileObj && fileObj.type.startsWith('image/')) {
      const fileDetails = { url: URL.createObjectURL(fileObj), file: fileObj.name, id: nanoid() };
      dispatch(registerUserInput({
        ...fileData,
        Prescription: [...(fileData.Prescription || []), fileDetails]
      }));
    }
    else {
      alert('Please upload an image file.');
    }
  }

  return (
    <div className="abc" style={{ width: '200px' }}>
      <input style={{
        marginBottom: '5px',
        opacity: 0,
        position: 'absolute',
        zIndex: -1
      }} type="file" id='file-upload' onChange={handleChange} accept="image/*" />
      <label
        htmlFor='file-upload'
        style={{
          backgroundColor: '#00B934',
          color: 'white',
          padding: '10px 15px',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'inline-block'
        }}
      >
        Choose File
      </label>
      {fileData.Prescription.map((val) => (
        <Card
          key={val.id}
          style={{
            width: 400,
            marginTop: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}
          title={val.file.length > 20 ? `${val.file.substring(0, 20)}...` : val.file}
          cover={<img alt="" src={val.url} style={{ width: 50 }} />}
        >
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this?"
            onConfirm={() => dispatch(handleDeletePrescription(val.id))}
            // onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
              <DeleteOutlined style={{ fontSize: '16px' }} />
          </Popconfirm>
        </Card>
      ))}
      <Button type='primary' style={(location.state !== null && location.state.boolean2) ? { display: 'initial', marginTop: '10px' } : { display: 'none' }} onClick={() => navigate('/Edit', { state: { id: location.state.id, boolean: false, boolean2: true } })}>Edit</Button>
    </div>
  );
}

export default UploadFile;
