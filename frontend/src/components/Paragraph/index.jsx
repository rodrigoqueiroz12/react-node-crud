import PropTypes from "prop-types"
import StyledParagraph from "./styled"

const Paragraph = ({ children, color, align, fontsize }) => {
  return (
    <StyledParagraph $color={color} $align={align} $fontSize={fontsize}>
      {children}
    </StyledParagraph>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  align: PropTypes.string,
  fontsize: PropTypes.string,
}

export default Paragraph
