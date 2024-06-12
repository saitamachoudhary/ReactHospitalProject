import React from "react";
import UploadLeftSection from "./UploadLeftSection";
import UploadRightSection from "./UploadRightSection";



const UploadContent=()=>{
    return(
        <div style={{display:'flex'}}>
            <UploadLeftSection/>
            <UploadRightSection/>
        </div>
    )
}

export default UploadContent;