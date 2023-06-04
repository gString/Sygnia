import {ReactElement} from "react";
import styled from "styled-components";
import {Task} from "../App.tsx";

const PriorityDisplay = styled.div`
  font-weight: 400;
  font-size: 16px;
  height: 30px;
  width: min-content;
  border-radius: 15px;
  padding: 0 16px;
  line-height: 30px;
`;
const Low = styled(PriorityDisplay)`
  background-color: #e0fdef;
  color: #00d2bb;
`
const Medium = styled(PriorityDisplay)`
  background-color: #fff4cc;
  color: #ffa756;
`
const High = styled(PriorityDisplay)`
  background-color: #ffe3e3;
  color: #fd626a;
`
interface Props {
    level: Task["priority"];
}

export default function Priority({level}: Props): ReactElement {
    switch(level) {
        case 1:
            return <Low>Low</Low>
        case 2:
            return <Medium>Medium</Medium>
        default:
            return <High>High</High>
    }
};