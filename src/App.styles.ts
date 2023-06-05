import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 116px;
`;
export const Headline = styled.h1`
  text-transform: uppercase;
  font-size: 32px;
  font-weight: 400;
  margin: 0 28px 0 66px;
`;
export const AddBtn = styled.button`
  background-color: #000;
  border-radius: 8px;
  color: #fff;
  border: none;
  outline: none;
  padding: 0;
  height: 32px;
  width: 128px;
  font-weight: 400;
  font: var(--munito-font);
  font-size: 16px;

  span {
    font-weight: 200;
    font-size: 20px;
    padding: 0 2px;
  }
`;
export const Filters = styled.div`
  width: 244px;
  height: 32px;
  background-color: #d5d5d5;
  margin: 0 64px 0 auto;
  border-radius: 8px;
`;
export const FilterBtn = styled(AddBtn)`
  width: 122px;
  background-color: transparent;
  cursor: pointer;

  &:disabled {
    background-color: #000;
    cursor: not-allowed;
  }
`;



