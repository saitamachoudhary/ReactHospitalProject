import UploadLeftSection from "./UploadLeftSection";
import UploadRightSection from "./UploadRightSection";



const UploadContent=()=>{
    return(
        <div style={{display:'flex',height:'inherit'}}>
            <UploadLeftSection/>
            <UploadRightSection/>
        </div>
    )
}

export default UploadContent;