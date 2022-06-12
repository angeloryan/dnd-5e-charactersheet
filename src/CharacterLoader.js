import {useState} from 'react';
import Popup from './Popup.js'
import Classes from './Classes.json';
import Races from './Races.json';
import Backgrounds from './Backgrounds.json';

function CharacterLoader(props) {
    const [name, setName] = useState("");
    const [characterClass, setCharacterClass] = useState("");
    const [race, setRace] = useState("");
    const [background, setBackground] = useState("");
    const [creatingCharacter, createCharacter] = useState(false);
    const [loadingCharacter, loadCharacter] = useState(false);

    const importCharacter = () => {
        createCharacter(false);
        loadCharacter(false);
        props.updateCharacterStats({
            name: name,
            characterClass: characterClass,
            race: race,
            level: 1
        })
    }

    return (
        <div>
            <button type='button' onClick={() => createCharacter(true)}>Create New Character</button>
            <button type='button' onClick={() => loadCharacter(true)}>Load Existing Character</button>
            <Popup status={creatingCharacter} statusCallback={() => createCharacter(false)}>
                <form>
                    <label>Name</label>
                    <input id='nameField' type='text' onChange = {(e) => setName(e.target.value)}/>
                    <br/>
                    <label>Class</label>
                    <select id = 'characterClassField' type = 'text' onChange = {(e) => setCharacterClass(e.target.value)}>
                        {Classes.map((charClass) => <option value={charClass.class} key={charClass.class}>{charClass.class}</option>)}
                    </select>
                    <br/>
                    <label>Race</label>
                    <select id = 'characterClassField' type = 'text' onChange = {(e) => setRace(e.target.value)}>
                        {Races.map((charRace) => <option value={charRace.race} key={charRace.race}>{charRace.race}</option>)}
                    </select>
                    <br/>
                    <label>Backgrounds</label>
                    <select id = 'characterClassField' type = 'text' onChange = {(e) => setRace(e.target.value)}>
                        {Backgrounds.map((charBackgrounds) => <option value={charBackgrounds.title} key={charBackgrounds.title}>{charBackgrounds.title}</option>)}
                    </select>
                    <br/>
                </form>
                <button type='button' onClick={() => importCharacter()}>Finish</button>
            </Popup>
            <Popup status={loadingCharacter} statusCallback={() => loadCharacter(false)}>
                WIP
            </Popup>
        </div>
    );
}

export default CharacterLoader;