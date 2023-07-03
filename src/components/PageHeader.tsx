import {ReactElement} from "react";
import {Priorities} from "../types.ts";

import {Header, PrioritiesDisplay, Priority, Title, User} from "./PageHeader.styles.ts";

interface Props {
    priorities: Priorities | null;
}

export default function PageHeader({priorities}: Props): ReactElement {

    return (
        <Header>
            <Title>ToDo</Title>
            <PrioritiesDisplay>
                <Priority level="high">{priorities?.high}</Priority>
                <Priority level="medium">{priorities?.medium}</Priority>
                <Priority level="low">{priorities?.low}</Priority>
            </PrioritiesDisplay>
            <User>H</User>
        </Header>
    );
}