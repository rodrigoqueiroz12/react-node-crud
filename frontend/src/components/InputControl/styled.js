import { styled } from "styled-components"

const StyledInputControl = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  flex-grow: 1;

  & label {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 100%;
    color: #252525;
  }
`

export default StyledInputControl
