import PropTypes from "prop-types"

import StyledLink from "./styled"

const Link = ({ to, children, variant, backgroundColor, color }) => {
  return (
    <StyledLink
      to={to}
      $variant={variant}
      $backgroundColor={backgroundColor}
      $color={color}
    >
      {children}
    </StyledLink>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  to: PropTypes.string,
}

export default Link
