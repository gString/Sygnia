import {ReactElement} from "react";
import styled from "styled-components";

const Header = styled.header`
  height: 80px;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0 0 6px rgba(0, 0, 0, .08);
`;

const Title = styled.h2`
  font-family: 'Comfortaa', system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: #000;
  text-transform: uppercase;
  margin: 0 auto 0 41px;
  line-height: 22px;
`;

const User = styled.h4`
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

// interface Props = {}

export default function PageHeader(/*{}: Props*/): ReactElement {

    return (
        <Header>
            <Title>ToDo</Title>
            <User>H</User>
        </Header>
    );
};