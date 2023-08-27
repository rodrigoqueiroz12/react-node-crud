import { styled } from "styled-components"

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: ${props => props.$columnGap || ""};
  row-gap: ${props => props.$rowGap || "1rem"};
  width: 100%;
  padding: 1.6rem;
  border-bottom: ${props => props.$borderBottom || ""};
`

export default StyledInfoContainer
