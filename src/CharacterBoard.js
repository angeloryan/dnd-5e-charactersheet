import {useState} from "react";

function CharacterBoard(props) {
    let data = props.data;
    
    return (
        <div>
            <p>Name: {"name" in data ? data["name"] : ""}</p>
            <p>Race: {"race" in data ? data["race"] : ""}</p>
            <p>Class: {"playerClass" in data ? data["playerClass"] : ""}</p>
            <p>Level: {"level" in data ? data["level"] : ""}</p>
        </div>
    )
}

export default CharacterBoard;