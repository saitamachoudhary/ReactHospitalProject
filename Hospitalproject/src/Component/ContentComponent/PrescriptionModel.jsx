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
      {registerData.prescription.length!==0?registerData.prescription!=null&&registerData.prescription.map((val,index)=>{
          return(
            <div key={index}>
            <img src={val.url} alt={val.file} style={{ maxWidth: '50%' }} />
          </div>
          )
      }):<h2>No Prescription Added</h2>}
          
      </Modal>
    </>
  );
};
export default PrescriptionModel;