import {useEffect, useMemo, useState} from "react";
import PageHeader from "./components/PageHeader.tsx";
import styled from "styled-components";
import Table from "./components/Table.tsx";

const Container = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  width: 100%;
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 116px;
`;

const Headline = styled.h1`
  text-transform: uppercase;
  font-size: 32px;
  font-weight: 400;
  margin: 0 28px 0 66px;
`;

const AddBtn = styled.button`
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

const Filters = styled.div`
  width: 244px;
  height: 32px;
  background-color: #d5d5d5;
  margin: 0 64px 0 auto;
  border-radius: 8px;
`;

const FilterBtn = styled(AddBtn)`
  width: 122px;
  background-color: transparent;
  cursor: pointer;

  &:disabled {
    background-color: #000;
    cursor: auto;
  }
}
`;

export interface Task {
    id: string;
    priority: 1 | 2 | 3;
    created_at: number;
    title: string;
    status: "incomplete" | "complete";
}

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isFiltered, setIsFiltered] = useState(false);

    const filteredList = useMemo(() => isFiltered ? tasks.filter(task => task.status !== "complete") : tasks, [isFiltered, tasks]);

    const FilterToggle = () => {
        return <Filters>
            <FilterBtn onClick={() => setIsFiltered(true)} disabled={isFiltered}>Incomplete</FilterBtn>
            <FilterBtn onClick={() => setIsFiltered(false)} disabled={!isFiltered}>All</FilterBtn>
        </Filters>
    }


    useEffect(() => {
        fetch('https://hor23frby6.execute-api.us-east-1.amazonaws.com/prod/todos', {
            headers: {
                'x-api-key': '5ITWHnqMJ73JcaJFhELR17wSWjHEWLhB1DnVuEw7',
            }
        })
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);

    const toggleComplete = (id: Task["id"]) => {
        setTasks(prevState => {
            const otherTasks = prevState.filter(task => task.id !== id);
            const taskToToggle = prevState.find(task => task.id === id);
            const newStatus = taskToToggle!.status === "incomplete" ? "complete" : "incomplete";
            return [
                ...otherTasks,
                { ...taskToToggle, status: newStatus }
            ]
        })
    }


    return (
        <Container>
            <PageHeader/>
            <Header>
                <Headline>To Do List</Headline>
                <AddBtn><span>+</span> Add task</AddBtn>
                <FilterToggle />
            </Header>
            {Boolean(filteredList.length) && <Table list={filteredList} toggleComplete={toggleComplete}/>}
        </Container>
    )
}

export default App
