import React from "react";
import PropTypes from "prop-types";
import {Modal, ModalBody, ModalHeader} from "reactstrap";

const ModalPopOver = ({isVisible}) =>
  <Modal class="modal fade" color="success" isOpen={isVisible}>
    <ModalHeader>Congratz !</ModalHeader>
    <ModalBody>
      <p>All data is valid.. </p>
    </ModalBody>
  </Modal>

export default ModalPopOver;

ModalPopOver.propTypes = {
  isVisible: PropTypes.bool
};

ModalPopOver.defaultProps = {
  isVisible: false
}