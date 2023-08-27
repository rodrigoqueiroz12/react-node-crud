import PropTypes from "prop-types"
import StyledInfoContainer from "./styled"

const InfoContainer = ({ children, borderBottom, columnGap, rowGap }) => {
  return (
    <StyledInfoContainer
      $borderBottom={borderBottom}
      $columnGap={columnGap}
      $rowGap={rowGap}
    >
      {children}
    </StyledInfoContainer>
  )
}

InfoContainer.propTypes = {
  children: PropTypes.node.isRequired,
  borderBottom: PropTypes.string,
  rowGap: PropTypes.string,
  columnGap: PropTypes.string,
}

export default InfoContainer
