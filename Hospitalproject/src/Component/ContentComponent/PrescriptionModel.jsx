import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const PrescriptionModel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registerData, setregisterData] = useState(() => {
    const existingData = localStorage.getItem('formDataArray');
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
  console.log(registerData);
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Prescription
      </Button>
      <Modal title="Prescription" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      {registerData.map((val, index) => (
          <div key={index}>
            {val.Prescription.map((v, idx) => (
              <img key={idx} src={v} alt={`Prescription ${idx + 1}`} style={{ maxWidth: '100%' }} />
            ))}
          </div>
        ))}
      </Modal>
    </>
  );
};
export default PrescriptionModel;