import { styled } from "styled-components"

const StyledParagraph = styled.p`
  width: 100%;
  color: ${props => props.$color || "hsla(0, 0%, 0%, 0.5)"};
  text-align: ${props => props.$align || "center"};
  font-size: ${props => props.$fontSize || "1.8rem"};
  font-style: normal;
  font-weight: 400;
  line-height: 135%;

  @media screen and (max-width: 390px) {
    font-size: 1.6rem;
  }

  & strong {
    font-size: inherit;
    color: ${props => props.$color || "hsla(0, 0%, 0%, 0.5)"};
    font-weight: 700;
  }
`

export default StyledParagraph
