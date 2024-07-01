const Registerright=()=>{
    return (
        <div style={{height:'',width:'40vw',backgroundColor:"#3758F9",padding:'20px 20px'}}>
          <div style={{display:'flex',alignItems:'center',lineHeight:'0px'}}>
            <img src="src\Component\Images\vecteezy_round-medical-cross-symbol-on-transparent-background_17178225 1.png" alt="" />
            <h3 style={{fontSize:'1.5rem',color:'white'}}>HealthCare</h3>
          </div>
          <div style={{display:'flex',alignItems:'left',justifyContent:'center'}}>
          <img style={{width:'410px'}} src="src\Component\Images\vecteezy_patient-with-doctor-and-nurse_24760222.png" alt="" />
          </div>
          <div>
            <h1 style={{color:'white',textAlign:'left',fontWeight:'300',fontSize:'40px',fontStyle:'italic'}}>Let's protect your self and those around you.</h1>
            <p style={{color:'white',fontSize:'14px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aperiam nemo obcaecati sit impedit, eos temporibus dignissimos sed, placeat possimus laboriosam voluptate ratione fugit repellendus. Distinctio nobis a est ex?</p>
          </div>
          <div style={{display:'flex'}}>
            <div className='line' style={{height:'5px',width:'80px',backgroundColor:'white',borderRadius:'5px'}}></div>
            <div className='circle' style={{height:'5px',width:'5px', backgroundColor:'white',borderRadius:'5px',marginLeft:'10px'}}></div>
            <div className='circle' style={{height:'5px',width:'5px', backgroundColor:'white',borderRadius:'3px',marginLeft:'10px'}}></div>
            <div className='circle' style={{height:'5px',width:'5px', backgroundColor:'white',borderRadius:'3px',marginLeft:'10px'}}></div>
            <div className='circle' style={{height:'5px',width:'5px', backgroundColor:'white',borderRadius:'3px',marginLeft:'10px'}}></div>
          </div>
        </div>
    )
}

export default Registerright;