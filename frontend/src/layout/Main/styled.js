import { styled } from "styled-components"

const StyledMain = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
  padding-top: 4.8rem;
  padding-inline: 1.6rem;
  overflow-x: hidden;

  @media screen and (min-width: 992px) {
    padding-top: 16rem;
  }
`

export default StyledMain
