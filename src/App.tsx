import {useCallback, useEffect, useMemo, useState} from "react";
import PageHeader from "./components/PageHeader.tsx";
import Table from "./components/Table.tsx";
import {AddBtn, Container, FilterBtn, Filters, Header, Headline} from "./App.styles.ts";
import {Priorities, Task} from "./types.ts";

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isFiltered, setIsFiltered] = useState(false);
    const [sortTerm, setSortTerm] = useState<keyof Task>("priority");

    const sortedList = useMemo(() => tasks.length ? tasks.sort((a:Task,b:Task) => {
        if (a[sortTerm] > b[sortTerm]) {
            return 1;
        } else if (a[sortTerm] < b[sortTerm]) {
            return -1;
        } else {
            return 0;
        }
    }) : [], [sortTerm, tasks]);

    const filteredList = useMemo(() => isFiltered ? sortedList.filter(task => task.status !== "complete") : sortedList, [isFiltered, sortedList]);

    const FilterToggle = () => {
        return <Filters>
            <FilterBtn onClick={() => setIsFiltered(true)} disabled={isFiltered}>Incomplete</FilterBtn>
            <FilterBtn onClick={() => setIsFiltered(false)} disabled={!isFiltered}>All</FilterBtn>
        </Filters>
    }

    const getPriorityName = (currentTask: Task): keyof Priorities => {
        switch (currentTask.priority) {
            case 1:
                return "low";
            case 2:
                return "medium";
            default:
                return "high";
        }
    }

    const priorityReducer = useCallback((tasks: Task[]) => {
        const initialValue: Priorities = { low: 0, medium: 0, high: 0, };

        return tasks.reduce(
            (result: Priorities, currentTask: Task) => {
                const priorityName = getPriorityName(currentTask);
                result[priorityName]++;
                return result;
            }, initialValue);
    }, []);

    const prioritySum = useMemo(() => {
        return tasks.length ? priorityReducer(tasks) : null;
    }, [tasks, priorityReducer]);

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
            return prevState.map(task => {
                if (task.id !== id) return task;
                return {...task, status: task.status === "incomplete" ? "complete" : "incomplete"}
            })
        })
    }

    const handleSort = (key: keyof Task) => setSortTerm(key);

    return (
        <Container>
            <PageHeader priorities={prioritySum}/>
            <Header>
                <Headline>To Do List</Headline>
                <AddBtn><span>+</span> Add task</AddBtn>
                <FilterToggle />
            </Header>
            {Boolean(filteredList.length) && <Table list={filteredList}
                                                    sortTerm={sortTerm}
                                                    toggleComplete={toggleComplete}
                                                    handleSort={handleSort}/>}
        </Container>
    )
}

export default App
