import {ReactElement} from "react";
import styled from "styled-components";
import CheckBox from "./CheckBox.tsx";
import Priority from "./Priority.tsx";
import {Task} from "../App.tsx";

const tableBorder = "1px solid rgba(38, 35, 43, .1)";

const Container = styled.div`
  flex-grow: 1;
  position: relative;
`;

const TableBG = styled.div`
  background-color: white;
  border-radius: 8px;
  position: absolute;
  top: 20px;
  left: 36px;
  right: 36px;
  bottom: 20px;
`;

const TableWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 66px;
  bottom: 20px;
  left: 66px;
  display: flex;
  align-items: flex-start;
`;

const StyledTable = styled.table`
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

const Header = styled.th`
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
`;

const isToday = (timecode: number) => {
    const inputDate: Date = new Date(timecode);
    const todaysDate: Date = new Date();

    return inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)
}

const getDateText = (timecode: number):string => {
    if (isToday(timecode)) return "Today";
    const inputDate = new Date(timecode);
    return inputDate.toLocaleDateString('en-US', {month: 'long', day: 'numeric'});
}

interface Props {
    list: Task[];
    toggleComplete: (id: string) => void
}

export default function Table({list, toggleComplete}: Props): ReactElement {



    return (
        <Container>
            <TableBG/>
            <TableWrapper>
                <StyledTable cellPadding={0} cellSpacing={0}>
                    <thead>
                    <tr>
                        <Header></Header>
                        <Header>Task name</Header>
                        <Header>Created at</Header>
                        <Header>Priority</Header>
                    </tr>
                    </thead>
                    <tbody>
                    {list && list.map(task => {
                        const dateText = getDateText(parseInt(task.created_at.toString()));
                        const handleClick = () => toggleComplete(task.id);
                        return (<tr key={task.id}>
                            <td><CheckBox isChecked={task.status === 'complete'} handleClick={handleClick}/></td>
                            <td>{task.title}</td>
                            <td>{dateText}</td>
                            <td><Priority level={task.priority} /></td>
                        </tr>
                    )})}
                    </tbody>
                </StyledTable>
            </TableWrapper>
        </Container>
    );
}