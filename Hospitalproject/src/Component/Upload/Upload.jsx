import React from "react";
import UpperSection from "./UpperSection";
import UpperSection2 from "./UpperSection2";
import UploadContent from "./UploadContent";

const Upload=()=>{
    return(
        <div style={{height:'100vh',width:'100vw'}}>
         <UpperSection/>
         <UpperSection2/>
         <UploadContent/>
        </div>
    )
}

export default Upload;