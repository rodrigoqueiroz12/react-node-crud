import PropTypes from "prop-types"
import StyledInputControl from "./styled"

const InputControl = ({ children, htmlFor, label }) => {
  return (
    <StyledInputControl>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </StyledInputControl>
  )
}

InputControl.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string,
  label: PropTypes.string,
}

export default InputControl
