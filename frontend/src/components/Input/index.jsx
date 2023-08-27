import PropTypes from "prop-types"
import StyledInput from "./styled"

const Input = ({
  placeholder,
  value,
  onChange,
  id,
  type,
  mask,
  maskPlaceholder,
  required,
}) => {
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
      type={type}
      mask={mask}
      maskPlaceholder={maskPlaceholder}
      required={required}
    />
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  type: PropTypes.string,
  mask: PropTypes.string,
  maskPlaceholder: PropTypes.string,
  required: PropTypes.bool,
}

export default Input
