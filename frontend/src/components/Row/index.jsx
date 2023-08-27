import PropTypes from "prop-types"
import StyledRow from "./styled"

const Row = ({
  children,
  height,
  gap,
  justifyContent,
  flexWrap,
  overflowX,
  paddingBottom,
}) => {
  return (
    <StyledRow
      $height={height}
      $gap={gap}
      $justifyContent={justifyContent}
      $flexWrap={flexWrap}
      $overflowX={overflowX}
      $paddingBottom={paddingBottom}
    >
      {children}
    </StyledRow>
  )
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  gap: PropTypes.string,
  justifyContent: PropTypes.string,
  flexWrap: PropTypes.string,
  overflowX: PropTypes.string,
  paddingBottom: PropTypes.string,
}

export default Row
