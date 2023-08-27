import { styled } from "styled-components"

const StyledTable = styled.table`
  border-radius: 0.4rem;
  width: 100%;
  max-width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-spacing: 0;

  & :is(th, td) {
    text-align: left;
    height: 4.8rem;
    font-size: 1.6rem;
    padding: 0 1.6rem;
    min-width: 15rem;
    white-space: nowrap;
  }

  & tr {
    height: 5.6rem;
    background-color: #f7f7f7;
  }

  & tbody tr:nth-child(2n - 1) {
    background-color: #fafafa;
  }

  & th {
    font-weight: 700;

    &:first-of-type {
      text-align: center;
      min-width: 5.6rem;
      width: 5.6rem;
      max-width: 5.6rem !important;
    }

    &:last-of-type {
      text-align: center;
    }

    &.name {
      width: 19rem;
      max-width: 19rem;
    }
  }

  & td {
    &:first-of-type {
      text-align: center;
      min-width: 5.6rem;
      width: 5.6rem;
      max-width: 5.6rem !important;
    }

    &.name {
      width: 19rem;
      max-width: 19rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    & .missing {
      color: #ff4136;
    }
  }
`

export default StyledTable
