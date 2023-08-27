import { styled } from "styled-components"

const StyledContainer = styled.div`
  width: min(100%, 1140px);
  display: flex;
  flex-direction: column;
  align-items: ${props => props.$alignItems || "flex-end"};
  gap: 1.6rem;
  flex-shrink: 0;
`

export default StyledContainer
