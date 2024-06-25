import { useState } from 'react';
import { Button, Modal } from 'antd';
const PrescriptionModel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registerData, setregisterData] = useState(() => {
    const existingData = localStorage.getItem('loginData');
    return existingData ? JSON.parse(existingData) : []
  })
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Prescription
      </Button>
      <Modal title="Prescription" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      {registerData.prescription!=null&&registerData.prescription.map((val,index)=>{
        console.log(val)
          return(
            <div key={index}>
            <img src={val.url} alt={val.file} style={{ maxWidth: '100%' }} />
          </div>
          )
      })}
          
      </Modal>
    </>
  );
};
export default PrescriptionModel;