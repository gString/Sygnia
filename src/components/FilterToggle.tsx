import {Dispatch, SetStateAction} from "react";
import {FilterBtn, Filters} from "../App.styles.ts";

interface Props {
    isFiltered: boolean;
    setIsFiltered: Dispatch<SetStateAction<boolean>>;
}

export default function FilterToggle({isFiltered, setIsFiltered}: Props) {

    return (
        <Filters>
            <FilterBtn onClick={() => setIsFiltered(true)} disabled={isFiltered}>Incomplete</FilterBtn>
            <FilterBtn onClick={() => setIsFiltered(false)} disabled={!isFiltered}>All</FilterBtn>
        </Filters>
    );
}