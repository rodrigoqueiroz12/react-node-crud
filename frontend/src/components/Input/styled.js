import { styled } from "styled-components"
import InputMask from "react-input-mask"

const StyledInput = styled(InputMask)`
  width: 100%;
  height: 4rem;
  padding: 0 1.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  flex-grow: 1;

  outline: none;
  border-radius: 4px;
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  background: #f7f7f7;

  color: rgba(0, 0, 0, 0.35);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;

  transition: border 300ms;

  &:focus {
    border-bottom: 1.5px solid #0074d9;
  }
`

export default StyledInput
