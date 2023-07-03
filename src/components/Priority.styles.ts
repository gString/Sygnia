import styled from "styled-components";

const PriorityDisplay = styled.div`
  font-weight: 400;
  font-size: 16px;
  height: 30px;
  width: min-content;
  border-radius: 15px;
  padding: 0 16px;
  line-height: 30px;
  position: relative;
  cursor: pointer;
`;
export const Low = styled(PriorityDisplay)`
  background-color: #e0fdef;
  color: #00d2bb;
`
export const Medium = styled(PriorityDisplay)`
  background-color: #fff4cc;
  color: #ffa756;
`
export const High = styled(PriorityDisplay)`
  background-color: #ffe3e3;
  color: #fd626a;
`
export const MenuBox = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 134px;
  height: 122px;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: -28px;
  left: 0;
  background-color: #fff;
  border-radius: 4px;
  overflow: clip;
  border: 1px solid #cecece;
  box-shadow: 0 0 4px rgba(0,0,0,.15);

  & > li {
    height: 38px;
    padding: 4px 0 4px 7px;
    cursor: pointer;
    
    &:hover {
      background-color: #f4f4f4;
    }
  }
`;