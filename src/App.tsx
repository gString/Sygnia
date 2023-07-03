import {useCallback, useEffect, useMemo, useState} from "react";
import PageHeader from "./components/PageHeader.tsx";
import Table from "./components/Table.tsx";
import {
    AddBtn,
    Container,
    Header,
    Headline
} from "./App.styles.ts";
import {Priorities, Task} from "./types.ts";
import AddTaskModal from "./components/AddTaskModal.tsx";
import FilterToggle from "./components/FilterToggle.tsx";
import {useQuery} from "@tanstack/react-query";

const URL = 'https://hor23frby6.execute-api.us-east-1.amazonaws.com/prod/todos';
const HEADER = {
    'x-api-key': '5ITWHnqMJ73JcaJFhELR17wSWjHEWLhB1DnVuEw7',
};
const getPriorityName = (currentTask: Task): keyof Priorities => {
    switch (currentTask.priority) {
        case 1:
            return "low";
        case 2:
            return "medium";
        default:
            return "high";
    }
};

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isFiltered, setIsFiltered] = useState(false);
    const [sortTerm, setSortTerm] = useState<keyof Task>("priority");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const queryFn = async () => {
        await new Promise(resolve => setTimeout(resolve, 900));

        //     in case they bring down the server, we want to use the static json
        //     DON'T TRY THIS AT HOME ;)
        try {
            const response = await fetch(URL, {
                headers: HEADER
            });
            return await response.json();
        } catch {
            const staticResponse = await fetch("staticMockData.json");
            return await staticResponse.json();
        }
    }

    const {isLoading, isError, data} = useQuery({
        queryKey: ["todos"],
        queryFn,
        retry: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
    })

    const sortedList = useMemo(() => tasks?.length ? tasks.sort((a: Task, b: Task) => {
        if (a[sortTerm] > b[sortTerm]) {
            return 1;
        } else if (a[sortTerm] < b[sortTerm]) {
            return -1;
        } else {
            return 0;
        }
    }) : [], [sortTerm, tasks]);

    const filteredList = useMemo(() => isFiltered ? sortedList.filter(task => task.status !== "complete") : sortedList, [isFiltered, sortedList]);

    const priorityReducer = useCallback((tasks: Task[]) => {
        const initialValue: Priorities = {low: 0, medium: 0, high: 0,};

        return tasks.reduce(
            (result: Priorities, currentTask: Task) => {
                const priorityName = getPriorityName(currentTask);
                result[priorityName]++;
                return result;
            }, initialValue);
    }, []);

    const prioritySum = useMemo(() => {
        return filteredList.length ? priorityReducer(filteredList) : null;
    }, [filteredList, priorityReducer]);

    useEffect(() => {
        setTasks(data);
    }, [data]);

    const toggleTaskComplete = (id: Task["id"]) => {
        setTasks(prevState => {
            return prevState.map(task => {
                if (task.id !== id) return task;
                return {...task, status: task.status === "incomplete" ? "complete" : "incomplete"}
            })
        })
    }

    const handleSort = (key: keyof Task) => setSortTerm(key);

    const changePriority = (id: Task["id"], priority: Task["priority"]) => {
        setTasks(prevState => {
            return prevState.map(task => {
                if (task.id !== id) return task;
                return {...task, priority};
            })
        })
    }

    const handleToggleModal = () => setIsModalOpen(!isModalOpen);

    const handleAddTask = (priority: Task["priority"], title: string) => {
        const now = Date.now();
        const newTask: Task = {
            id: now.toString(),
            priority,
            created_at: now / 1000,
            title,
            status: "incomplete"
        }
        setTasks(prevState => [...prevState, newTask]);
        handleToggleModal();
    }

    return (
        <Container>
            <PageHeader priorities={prioritySum}/>
            <Header>
                <Headline>To Do List</Headline>
                <AddBtn onClick={handleToggleModal}><span>+</span> Add task</AddBtn>
                <FilterToggle isFiltered={isFiltered} setIsFiltered={setIsFiltered}/>
            </Header>
            {isError ? <h3>An error has occurred while loading the data</h3>
                : isLoading ? <h3>Loading, please wait</h3>
                    : <Table list={filteredList}
                             sortTerm={sortTerm}
                             toggleComplete={toggleTaskComplete}
                             handleSort={handleSort}
                             changePriority={changePriority}/>}
            {isModalOpen && <AddTaskModal toggleModal={handleToggleModal} addTask={handleAddTask}/>}
        </Container>
    )
}

export default App
