import { useDispatch, useSelector } from 'react-redux';
import { useLocation,useNavigate} from 'react-router-dom';
import { registerPrescription,} from "../../Store/RegisterSlice";
import { nanoid } from '@reduxjs/toolkit';
import { registerUserInput } from '../../Store/UserInputSlice';
import { Button } from 'antd';
import { handleDeletePrescription } from '../../Store/UserInputSlice';

function UploadFile() {
  const location = useLocation();
  const navigate=useNavigate();
  const fileData=useSelector(state=>state.userinputReducer.user);
  const dispatch = useDispatch();


  function handleChange(e) {
    const fileObj = e.target.files[0];
    const fileDetails = { url: URL.createObjectURL(fileObj), file: fileObj.name, id: nanoid() };
    dispatch(registerPrescription(fileDetails));
    dispatch(registerUserInput({
      ...fileData,
      Prescription: [...(fileData.Prescription || []), fileDetails]
    }));
  }

  return (
    <div className="abc" style={{width:'200px'}}>
      <input style={{marginBottom:"5px"}} type="file" onChange={handleChange} />
      {fileData.Prescription.map((val) => (
        <div style={{marginBottom:'5px',display:'flex',alignItems:'center',justifyContent:"space-between",padding:'5px'}} key={val.id}>
          <img src={val.url} alt="prescription" style={{width:'50px'}} />
          <Button onClick={() => dispatch(handleDeletePrescription(val.id))}>Delete</Button>
        </div>
      ))}
      <Button  onClick={()=>navigate('/Edit',{state:location.state})}>Edit</Button>
    </div>
  );
}

export default UploadFile;
