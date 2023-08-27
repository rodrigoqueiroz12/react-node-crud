import PropTypes from "prop-types"

import StyledModal from "./styled"

const Modal = ({ children }) => {
  return <StyledModal>{children}</StyledModal>
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Modal
