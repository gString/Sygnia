import styled from "styled-components";

const tableBorder = "1px solid rgba(38, 35, 43, .1)";
export const Container = styled.div`
  flex-grow: 1;
  position: relative;
`;
export const TableBG = styled.div`
  background-color: white;
  border-radius: 8px;
  position: absolute;
  top: 20px;
  left: 36px;
  right: 36px;
  bottom: 20px;
`;
export const TableWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 66px;
  bottom: 20px;
  left: 66px;
  display: flex;
  align-items: flex-start;
`;
export const StyledTable = styled.table`
  flex-grow: 1;
  padding: 0;

  & td {
    height: 60px;
    border-bottom: ${tableBorder};
    border-left: ${tableBorder};
  }

  & td:first-child {
    width: 54px;
    height: 60px;
    border-left: none;
    text-align: center;
  }

  & td:nth-child(2) {
    width: 40%;
    border-left: none;
  }

  & td:nth-child(3), & th:nth-child(3), & td:nth-child(4), & th:nth-child(4) {
    padding-left: 6vw;
  }
`;
export const Header = styled.th`
  color: white;
  background-color: black;
  height: 60px;
  text-align: left;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .36);

  &:first-child {
    border-radius: 8px 0 0 8px;
  }

  &:last-child {
    border-radius: 0 8px 8px 0;
  }

  & span {
    cursor: pointer;
  }

    &.isSorting {
    & span {
      cursor: not-allowed;
      position: relative;

      &::after {
        content: "";
        width: 7px;
        height: 7px;
        box-sizing: border-box;
        border: 4px solid transparent;
        border-bottom-color: #d6d6d6;
        position: absolute;
        top: calc(50% - 5px);
        right: -21px;
      }

    }
  }
`;