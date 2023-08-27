import PropTypes from "prop-types"
import StyledContainer from "./styled"

const Container = ({ children, alignItems }) => {
  return <StyledContainer $alignItems={alignItems}>{children}</StyledContainer>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  alignItems: PropTypes.string,
}

export default Container
