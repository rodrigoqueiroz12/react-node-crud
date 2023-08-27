import { styled } from "styled-components"

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  height: 4rem;
  padding: ${props => (props.$variant === "square" ? "0" : "0 1.6rem")};
  width: ${props => (props.$variant === "square" ? "4rem" : "auto")};
  border: none;
  border-radius: 0.4rem;
  background-color: ${props => props.$backgroundColor || "#0074d9"};
  outline: none;
  cursor: pointer;
  color: ${props => props.$color || "inherit"};

  & .text {
    font-family: "Figtree", sans-serif;
    color: ${props => props.$color || "#f7f7f7"};
    text-align: center;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;

    @media screen and (max-width: 390px) {
      font-size: 1.6rem;
    }
  }
`

export default StyledButton
