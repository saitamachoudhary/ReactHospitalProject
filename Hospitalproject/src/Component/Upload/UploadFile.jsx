import {useDispatch,useSelector} from 'react-redux';
import { registerPrescription,handleDelete} from "../../Store/RegisterSlice";
import { nanoid } from '@reduxjs/toolkit';
function UploadFile() {
  const file=useSelector(state=>state.registerReducer.Prescription);
  const dispatch=useDispatch();
	function handleChange(e) {
        const fileObj=e.target.files[0];
        dispatch(registerPrescription({url:URL.createObjectURL(fileObj),file:fileObj.name,id:nanoid()}))
	}
	return (
		<div className="App">
			<input type="file" onChange={handleChange} />
			{file.map((val,index)=>{
                return(
                    <div key={index}>
                        <img src={val.url} />
                        {/* <button onClick={dispatch(handleDelete(val.id))}>Delete</button> */}
                        <button onClick={()=>dispatch(handleDelete(val.id))}>Delete</button>
                    </div>
                )
            })}
		</div>
	);
}

export default UploadFile;
