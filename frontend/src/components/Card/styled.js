import { styled } from "styled-components"

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.$width || "100%"};
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fafafa;
`

export default StyledCard
