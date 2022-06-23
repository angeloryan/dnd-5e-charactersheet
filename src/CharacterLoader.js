import {useState} from 'react';
import Popup from './Popup.js'
import Classes from './Classes.json';
import Races from './Races.json';
import Backgrounds from './Backgrounds.json';

function CharacterLoader(props) {
    // Demographic information
    const [name, setName] = useState('Name');
    const [characterClass, setCharacterClass] = useState('Barbarian');
    const [race, setRace] = useState('Dwarf');
    const [background, setBackground] = useState('Acolyte');

    // Ability Scores
    const [strengthScore, setStrength] = useState(15);
    const [dexterityScore, setDexterity] = useState(14);
    const [constitutionScore, setConstitution] = useState(13);
    const [intelligenceScore, setIntelligence] = useState(12);
    const [wisdomScore, setWisdom] = useState(10);
    const [charismaScore, setCharisma] = useState(8);

    // Manage popups 
    const [creatingCharacter, createCharacter] = useState(false);
    const [loadingCharacter, loadCharacter] = useState(false);

    const importCharacter = () => {
        createCharacter(false);
        loadCharacter(false);
        setPage(0);

        let scores = {
            Strength: strengthScore,
            Dexterity: dexterityScore,
            Constitution: constitutionScore,
            Intelligence: intelligenceScore,
            Wisdom: wisdomScore,
            Charisma: charismaScore,
        }

        props.updateCharacterStats({
            name: name,
            characterClass: characterClass,
            race: race,
            background: background,
            level: 1,
            abilityScores: scores,
        })
    }

    // Page needs to be a state variable otherwise React will not rerender
    const [page, setPage] = useState(0);
    var pages = [];
    
    // Demographic character data (name, class, race, background)
    pages.push(
        <form>
            <label>Name</label>
            <input type='text' onChange = {(e) => setName(e.target.value)}/>
            <br/>
            <label>Class</label>
            <select type = 'text' onChange = {(e) => setCharacterClass(e.target.value)}>
                {Classes.map((charClass) => <option value={charClass.class} key={charClass.class}>{charClass.class}</option>)}
            </select>
            <br/>
            <label>Race</label>
            <select type = 'text' onChange = {(e) => setRace(e.target.value)}>
                {Races.map((charRace) => <option value={charRace.race} key={charRace.race}>{charRace.race}</option>)}
            </select>
            <br/>
            <label>Background</label>
            <select type = 'text' onChange = {(e) => setBackground(e.target.value)}>
                {Backgrounds.map((charBackgrounds) => <option value={charBackgrounds.title} key={charBackgrounds.title}>{charBackgrounds.title}</option>)}
            </select>
            <br/>
        </form>
    )

    // Character ability scores array
    pages.push(
        <form>
            <label>Strength</label>
            <input type='number' onChange = {(e) => setStrength(parseInt(e.target.value))}/>
            <br/>
            <label>Dexterity</label>
            <input type='number' onChange = {(e) => setDexterity(parseInt(e.target.value))}/>
            <br/>
            <label>Constitution</label>
            <input type='number' onChange = {(e) => setConstitution(parseInt(e.target.value))}/>
            <br/>
            <label>Intelligence</label>
            <input type='number' onChange = {(e) => setIntelligence(parseInt(e.target.value))}/>
            <br/>
            <label>Wisdom</label>
            <input type='number' onChange = {(e) => setWisdom(parseInt(e.target.value))}/>
            <br/>
            <label>Charisma</label>
            <input type='number' onChange = {(e) => setCharisma(parseInt(e.target.value))}/>
            <br/>
        </form>
    )

    const nextPage = () => {
        page < pages.length - 1 ? setPage(page + 1) : importCharacter();
    }

    return (
        <div>
            <button type='button' onClick={() => createCharacter(true)}>Create New Character</button>
            <button type='button' onClick={() => loadCharacter(true)}>Load Existing Character</button>
            <Popup status={creatingCharacter} statusCallback={() => createCharacter(false)}>
                {pages[page]}
                <button type='button' onClick={nextPage}>Next</button>
            </Popup>
            <Popup status={loadingCharacter} statusCallback={() => loadCharacter(false)}>
                WIP
            </Popup>
        </div>
    );
}

export default CharacterLoader;