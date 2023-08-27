import PropTypes from "prop-types"
import StyledTable from "./style"

const Table = ({ children }) => {
  return <StyledTable>{children}</StyledTable>
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Table
