import PropTypes from "prop-types"

import StyledMain from "./styled"

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>
}

Main.propTypes = { children: PropTypes.node.isRequired }

export default Main
