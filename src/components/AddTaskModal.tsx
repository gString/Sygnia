import React, {ReactElement, useMemo, useState} from "react";
import {Task} from "../types.ts";

import Arrow from '../assets/Vector 1.png';
import {
    BlockingLayer,
    CloseBtn, Dropdown, Footer, FormBtn,
    Modal,
    ModalBody,
    ModalHeader,
    ModalTitle,
    PriorityBar,
    TaskText,
    AddBtn,
} from "./AddTaskModal.styles.ts";
import {High, Low, Medium} from "./Priority.styles.ts";


interface Props {
    toggleModal: () => void;
    addTask: (priority: Task["priority"], title: string) => void;
}

export default function AddTaskModal({toggleModal, addTask}: Props): ReactElement {
    const [selectedPriority, setSelectedPriority] = useState<Task["priority"]>(2);
    const [text, setText] = useState("");

    const handleAddBtnClick = () => addTask(selectedPriority, text);

    const triggerDisplay = useMemo(() => {
        switch(selectedPriority) {
            case 1:
                return <Low>Low</Low>
            case 2:
                return <Medium>Medium</Medium>
            default:
                return <High>High</High>

        }}, [selectedPriority]);

    return (
        <BlockingLayer>

        <Modal>
            <ModalHeader>
                <ModalTitle>Add Task</ModalTitle>
                <CloseBtn onClick={toggleModal}>x</CloseBtn>
            </ModalHeader>
            <ModalBody>
                <label>Add a task</label>
                <TaskText onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)} value={text} />
                <PriorityBar>
                    <label>Priority</label>
                    <Dropdown.Root>
                        <Dropdown.Trigger>
                            { triggerDisplay }
                            <img src={Arrow} alt="arrow down icon" />
                        </Dropdown.Trigger>
                        <Dropdown.Content>
                            <Dropdown.Arrow />
                            <Dropdown.Item onSelect={() => setSelectedPriority(1)}><Low>Low</Low></Dropdown.Item>
                            <Dropdown.Item onSelect={() => setSelectedPriority(2)}><Medium>Medium</Medium></Dropdown.Item>
                            <Dropdown.Item onSelect={() => setSelectedPriority(3)}><High>High</High></Dropdown.Item>
                        </Dropdown.Content>
                    </Dropdown.Root>
                </PriorityBar>
                <Footer>
                    <FormBtn onClick={toggleModal}>Cancel</FormBtn>
                    <AddBtn disabled={!text.length}
                            onClick={handleAddBtnClick}>Add</AddBtn>
                </Footer>
            </ModalBody>

        </Modal>
        </BlockingLayer>
    );
}