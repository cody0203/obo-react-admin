import React from "react";
import { Modal } from "antd";

const ConfirmModal = (props: any) => {
  const { detail, isOpen, toggleConfirmModal, okLogic } = props;
  return (
    <>
      {detail ? (
        <Modal
          title="Xác nhận xoá sản phẩm"
          centered
          visible={isOpen}
          onCancel={toggleConfirmModal}
          onOk={okLogic.bind(null, detail.id)}
        >
          Bạn có muốn xoá - {detail.name}
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

export default ConfirmModal;
