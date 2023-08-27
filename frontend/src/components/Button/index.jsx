import PropTypes from "prop-types"
import StyledButton from "./styled"

const Button = ({ children, variant, backgroundColor, color, onClick }) => {
  return (
    <StyledButton
      onClick={onClick}
      $variant={variant}
      $backgroundColor={backgroundColor}
      $color={color}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
