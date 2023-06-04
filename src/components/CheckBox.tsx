import styled from "styled-components";
import Checkmark from "../assets/checkmark.svg";

const Circle = styled.div`
  height: 20px;
  width: 20px;
  border: 1px solid #a1a0a0;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;

  & img {
    display: none;
  }

  &.checked {
    background-color: #00d2aa;
    border-color: #176f5e;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
      display: inline-block;
    }
  }
`;

interface Props {
    isChecked: boolean;
    handleClick: () => void
}

export default function Checkbox({ isChecked, handleClick }:Props) {
    return <Circle className={isChecked ? 'checked' : ''} onClick={handleClick}><img src={Checkmark} alt="check mark"/></Circle>
}