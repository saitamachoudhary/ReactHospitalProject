import { useDispatch, useSelector } from 'react-redux';
import { useLocation,useNavigate} from 'react-router-dom';
import { registerPrescription, handleDelete } from "../../Store/RegisterSlice";
import { nanoid } from '@reduxjs/toolkit';
import { useEffect, useRef } from 'react';
import { Button } from 'antd';

function UploadFile() {
  const location = useLocation();
  const navigate=useNavigate();
  const file = useSelector(state => state.registerReducer.Prescription);
  const dispatch = useDispatch();
  const locationStateProcessed = useRef(false);

  function handleChange(e) {
    const fileObj = e.target.files[0];
    dispatch(registerPrescription({ url: URL.createObjectURL(fileObj), file: fileObj.name, id: nanoid() }));
  }

  useEffect(() => {
    if (location.state && !locationStateProcessed.current&&location.state.pres!==null) {
      location.state.pres.forEach(val => dispatch(registerPrescription(val)));
      locationStateProcessed.current = true;
    }
  }, [location.state, dispatch]);

  return (
    <div className="abc" style={{width:'200px'}}>
      <input style={{marginBottom:"5px"}} type="file" onChange={handleChange} />
      {file.map((val) => (
        <div style={{marginBottom:'5px',display:'flex',alignItems:'center',justifyContent:"space-between",padding:'5px'}} key={val.id}>
          <img src={val.url} alt="prescription" style={{width:'50px'}} />
          <Button onClick={() => dispatch(handleDelete(val.id))}>Delete</Button>
        </div>
      ))}
      <Button style={location.state?{display:'initial'}:{display:'none'}} onClick={()=>navigate('/Edit',{state:location.state.id})}>Edit</Button>
    </div>
  );
}

export default UploadFile;
