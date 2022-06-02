import {useState} from "react";
import Popup from "./Popup.js";

function StatsDisplay(props) {
    const [charName, setCharName] = useState("");
    const [charClass, setCharClass] = useState("Barbarian");
    const [charRace, setCharRace] = useState("Dwarf");
    const [charLevel, setLevel] = useState(1);
    const [displayData, setDisplayData] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false);

    const createCharButtonPressed = () => {
        setButtonPopup(true);
    }

    const importCharButtonPressed = () => {
        setDisplayData(true);
        props.updateData({
            charName: charName,
            charClass: charClass,
        });
    }

    const popupClose = () => {
        console.log(charClass);
        setButtonPopup(false);
        setDisplayData(true);
        props.updateData({
            charName: charName,
            charClass: charClass,
        });
    }

    const levelUpButtonPressed = () => {
        setLevel(charLevel + 1);
    }

    return displayData ? (
        <div>
            <button type = "button" onClick = {levelUpButtonPressed}>Level Up</button>
            <p>Name: {charName} </p>
            <p>Race: {charRace} </p>
            <p>Class: {charClass} </p>
            <p>Level: {charLevel} </p>
        </div>
    )
    : (
        <div>
            <button type = "button" onClick = {createCharButtonPressed}>Create New Character</button>
            <button type = "button" onClick = {importCharButtonPressed}>Import Existing Character</button>
            <Popup trigger={buttonPopup} setTrigger = {popupClose}>
                <form>
                    <label>Name </label>
                    <input
                        id = "nameField"
                        type = "text"
                        onChange = {(e) => setCharName(e.target.value)}
                    />
                    <br/>
                    <label>Race </label>
                    <select id = "raceField" type = "text" onChange = {(e) => setCharRace(e.target.value)}>
                        <option value = "Dwarf">Dwarf</option>
                        <option value = "Elf">Elf</option>
                        <option value = "Halfling">Halfling</option>
                        <option value = "Human">Human</option>
                        <option value = "Dragonborn">Dragonborn</option>
                        <option value = "Gnome">Gnome</option>
                        <option value = "Half-Elf">Half-Elf</option>
                        <option value = "Half-Orc">Half-Orc</option>
                        <option value = "Tiefling">Tiefling</option>
                    </select>
                    <br/>
                    <label>Class </label>
                    <select id = "classField" type = "text" onChange = {(e) => setCharClass(e.target.value)}>
                        <option value = "Barbarian">Barbarian</option>
                        <option value = "Bard">Bard</option>
                        <option value = "Cleric">Cleric</option>
                        <option value = "Druid">Druid</option>
                        <option value = "Fighter">Fighter</option>
                        <option value = "Monk">Monk</option>
                        <option value = "Paladin">Paladin</option>
                        <option value = "Ranger">Ranger</option>
                        <option value = "Rouge">Rouge</option>
                        <option value = "Sorcerer">Sorcerer</option>
                        <option value = "Warlock">Sorcerer</option>
                        <option value = "Wizard">Wizard</option>
                    </select>
                </form>
            </Popup>
        </div>
    )
};

export default StatsDisplay;