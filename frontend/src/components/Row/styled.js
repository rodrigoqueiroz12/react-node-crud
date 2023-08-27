import { styled } from "styled-components"

const StyledRow = styled.div`
  width: 100%;
  height: ${props => props.$height || "4rem"};
  display: flex;
  justify-content: ${props => props.$justifyContent || "auto"};
  gap: ${props => props.$gap || "1.6rem"};
  overflow-x: ${props => props.$overflowX || "unset"};

  flex-wrap: ${props => props.$flexWrap || "unset"};
  padding-bottom: ${props => props.$paddingBottom || "unset"};
`

export default StyledRow
