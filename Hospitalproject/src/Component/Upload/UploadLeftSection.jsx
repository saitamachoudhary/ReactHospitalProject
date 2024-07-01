import UploadFile from "./UploadFile";



const UploadLeftSection=()=>{
    return(
        <div style={{width:'50vw',height:'',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div>
             <div>
             <h1>Upload Prescription</h1>
             <p>Please Upload Valid Prescription From your Valid Doctor</p>
             </div>
                <div style={{marginTop:'20px'}}>
                    <UploadFile/>
                </div>
                <div style={{height:'0.5px',width:'100%',backgroundColor:'gray',marginTop:"20px"}}></div>
                <p style={{fontSize:'12px'}}>Note:<span style={{color:'gray'}}>Always Upload a clear version of your prescription for getting better result.</span></p>
            </div>
        </div>
    )
}


export default UploadLeftSection;