import DropDownMenu from "./DropDownMenu1";
import DropDownProfile from "./DropDownProfile";


const UpperSection=()=>{
    return(
        <div style={{display:'flex',alignItems:"center",justifyContent:'space-between',padding:'10px 80px',boxShadow:'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}}>
            <div style={{display:'flex',alignItems:'center'}}>
            <DropDownMenu/>
            <div style={{display:'flex',alignItems:'center',marginLeft:'24px'}}>
            <div style={{height:'30px',width:'1px',backgroundColor:'gray'}}></div>
            <div style={{display:'flex',alignItems:'center',marginLeft:'24px'}}>
                <img style={{height:'25px',width:"20px"}} src="src\Component\Images\phone-icon-938 1.png" alt="" />
                <p style={{color:'gray'}}>Customer Support<span style={{color:'black',marginLeft:'5px'}}>1800 559 6580</span></p>
            </div>
            </div>
            </div>
            <DropDownProfile/>
        </div>
    )
}

export default UpperSection;