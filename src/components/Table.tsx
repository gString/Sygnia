import {ReactElement, useCallback} from "react";
import CheckBox from "./CheckBox.tsx";
import Priority from "./Priority.tsx";

import {Task} from "../types.ts";
import {Container, Header, StyledTable, TableBG, TableWrapper} from "./table.styles.ts";

const isToday = (timecode: number) => {
    const inputDate: Date = new Date(timecode);
    const todaysDate: Date = new Date();

    return inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)
}

const getDateText = (timecode: number): string => {
    const tc = Math.floor(timecode * 1000);
    if (isToday(tc)) return "Today";
    const inputDate = new Date(tc);
    return inputDate.toLocaleDateString('en-US', {month: 'long', day: 'numeric'});
}

interface Props {
    list: Task[];
    toggleComplete: (id: string) => void;
    handleSort: (key: keyof Task) => void;
    sortTerm: keyof Task;
    changePriority: (id: Task["id"], priority: Task["priority"]) => void;
}

interface HeaderProps {
    field: keyof Task;
    title: string;
}

export default function Table({list, toggleComplete, handleSort, sortTerm, changePriority}: Props): ReactElement {

    const clickHandler = useCallback((key: keyof Task) => () => handleSort(key), [handleSort]);

    const ClickableHeader =
        ({field, title}: HeaderProps) => (<Header onClick={clickHandler(field)}
                                                  className={field === sortTerm ? "isSorting" : ""}>
                <span>{title}</span>
            </Header>
        )

    return (
        <Container>
            <TableBG/>
            <TableWrapper>
                <StyledTable cellPadding={0} cellSpacing={0}>
                    <thead>
                    <tr>
                        <Header></Header>
                        <ClickableHeader field="title" title="Task name" />
                        <ClickableHeader field="created_at" title="Created at" />
                        <ClickableHeader field="priority" title="Priority" />
                    </tr>
                    </thead>
                    <tbody>
                    {list && list.map(task => {
                        const dateText = getDateText(task.created_at);
                        const handleClick = () => toggleComplete(task.id);
                        const handlePriorityChange = (priority: Task["priority"]) => changePriority(task.id, priority);
                        return (<tr key={task.id}>
                                <td><CheckBox isChecked={task.status === 'complete'} handleClick={handleClick}/></td>
                                <td>{task.title}</td>
                                <td>{dateText}</td>
                                <td><Priority level={task.priority} handlePriorityChange={handlePriorityChange}/></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </StyledTable>
            </TableWrapper>
        </Container>
    );
}