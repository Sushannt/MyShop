import { useState } from "react";
import { Button, Modal } from "keep-react";
import { CloudArrowUp } from "phosphor-react";
import PropTypes from "prop-types";

const CartModal = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const onClick = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <Modal
        icon={<CloudArrowUp size={28} color="#1B4DFF" />}
        size="md"
        show={showModal}
        position="top-center"
      >
        <Modal.Header>Do you want to upload this file?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-body-4 leading-relaxed text-metal-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClick}>
            Cancel
          </Button>
          <Button type="primary" onClick={onClick}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

CartModal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartModal;
