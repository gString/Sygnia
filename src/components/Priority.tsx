import {ReactElement, useState} from "react";
import {Task} from "../types.ts";

import {High, Low, Medium, MenuBox} from "./Priority.styles.ts";

interface Props {
    level: Task["priority"];
    handlePriorityChange: (priority: Task["priority"]) => void;
}

export default function Priority({level, handlePriorityChange}: Props): ReactElement {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuClick = (priority: Task["priority"]) => {
        if (priority !== level) handlePriorityChange(priority);
        setIsMenuOpen(false);
    }

    const Menu = () => <MenuBox>
        <li onClick={() => menuClick(1)}><Low>Low</Low></li>
        <li onClick={() => menuClick(2)}><Medium>Medium</Medium></li>
        <li onClick={() => menuClick(3)}><High>High</High></li>
    </MenuBox>

    const handleMenuOpen = () => {
        if (!isMenuOpen) {
            setIsMenuOpen(true)
        }
    };

    switch(level) {
        case 1:
            return <Low onClick={handleMenuOpen}>Low{isMenuOpen && <Menu/>}</Low>
        case 2:
            return <Medium onClick={handleMenuOpen}>Medium{isMenuOpen && <Menu/>}</Medium>
        default:
            return <High onClick={handleMenuOpen}>High{isMenuOpen && <Menu/>}</High>
    }
}