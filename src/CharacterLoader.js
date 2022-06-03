import "./CharacterLoader.css";
import {useState} from 'react';
import Popup from "./Popup";

function CharacterLoader(props) {
    const [name, setName] = useState("");
    const [race, setRace] = useState("Dwarf");
    const [playerClass, setPlayerClass] = useState("Barbarian");
    const [createCharacterPopup, setCreateCharacterPopup] = useState(false);
    const [popupPage, setPopupPage] = useState(0);

    const createCharacter = () => {
        setCreateCharacterPopup(true);
        setPopupPage(0);
    }

    const submitCharacterData = () => {
        setCreateCharacterPopup(false);
        props.updateData({
            name: name,
            race: race,
            playerClass: playerClass,
            level: 1
        })
    }

    const nextPage = () => {
        popupPage < popupPages.length - 1  ? setPopupPage(popupPage + 1) : submitCharacterData();
    }

    const loadCharacter = () => {
        // scan character file and pass it in
    }

    let popupPages = [];
    popupPages.push(
                    <form>
                        <label>Name </label>
                        <input id="nameField" type="text" onChange = {(e) => setName(e.target.value)}/>
                        <br/>

                        <label>Race </label>
                        <select id = "raceField" type = "text" onChange = {(e) => setRace(e.target.value)}>
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
                        <select id = "classField" type = "text" onChange = {(e) => setPlayerClass(e.target.value)}>
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
                        <button type="button" onClick = {nextPage}>Next</button>
                    </form>
                    );
        
    popupPages.push(<form><button type="button" onClick = {nextPage}>Next</button></form>)

    return (
        <div>
            <button type="button" onClick = {createCharacter}>Create New Character</button>
            <button type="button" onClick = {loadCharacter}>Load Existing Character</button>

            <Popup trigger={createCharacterPopup} onTrigger={setCreateCharacterPopup}>
                {popupPages[popupPage]}
            </Popup>
        </div>
    )
};

export default CharacterLoader;