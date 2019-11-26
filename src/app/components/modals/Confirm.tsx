import React from 'react';
import { Modal } from 'antd';

const ConfirmModal = (props: any) => {
  const { detail, isOpen, toggleConfirmModal, deleteProduct } = props;
  return (
    <Modal
      title="Xác nhận xoá sản phẩm"
      centered
      visible={isOpen}
      onCancel={toggleConfirmModal}
      onOk={deleteProduct.bind(null, detail['id'])}
    >
      Bạn có muốn xoá - {detail['name']}
    </Modal>
  );
};

export default ConfirmModal;
