import React, { useState } from "react";

function UploadFile() {
	const [file, setFile] = useState(()=>{
        const existingData=localStorage.getItem('ImageDataArray');
        return existingData?JSON.parse(existingData):[];
    });

	function handleChange(e) {
        const updatedImageData=[...file,URL.createObjectURL(e.target.files[0])];
        localStorage.setItem('ImageDataArray',JSON.stringify(updatedImageData));
		setFile(updatedImageData);
	}

    function HandleDelete(index){
        const updateFile=file.filter((val,index2)=>index!==index2);
        localStorage.setItem('ImageDataArray',JSON.stringify(updateFile));
        setFile(updateFile);
    }

	return (
		<div className="App">
			<input type="file" onChange={handleChange} />
			{file.map((val,index)=>{
                return(
                    <div>
                        <img src={val} />
                        <button onClick={()=>HandleDelete(index)}>Delete</button>
                    </div>
                )
            })}
		</div>
	);
}

export default UploadFile;
