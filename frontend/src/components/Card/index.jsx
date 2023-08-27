import PropTypes from "prop-types"
import StyledCard from "./styled"

const Card = ({ children, width }) => {
  return <StyledCard $width={width}>{children}</StyledCard>
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
}

export default Card
