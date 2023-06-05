import styled from "styled-components";
import {Priorities} from "../types.ts";

const getPriorityColor = (key: keyof Priorities) => {
    switch (key) {
        case "low":
            return "#e0fdef";
        case "medium":
            return "#fff4cc";
        default:
            return "#ffe3e3";
    }
}
export const Header = styled.header`
  height: 80px;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0 0 6px rgba(0, 0, 0, .08);
`;
export const Title = styled.h2`
  font-family: 'Comfortaa', system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: #000;
  text-transform: uppercase;
  margin: 0 auto 0 41px;
  line-height: 22px;
`;
export const User = styled.h4`
  font-size: 20px;
  font-weight: 400;
  color: white;
  background-color: #000;
  line-height: 48px;
  height: 48px;
  width: 48px;
  text-align: center;
  border-radius: 50%;
  margin: 0 28px 0 0;
`;
export const PrioritiesDisplay = styled.ul`
  list-style: none;
  display: flex;
  margin-right: 12px;
`;

interface PriorityProps {
    level: keyof Priorities
}

export const Priority = styled.li<PriorityProps>`
  font-size: 16px;
  font-weight: 700;
  margin-right: 42px;
  position: relative;

  &::before {
    content: "";
    height: 12px;
    width: 12px;
    background-color: ${props => getPriorityColor(props.level)};
    position: absolute;
    left: -15px;
    top: calc(50% - 6px);
    border-radius: 50%;
  }

`;