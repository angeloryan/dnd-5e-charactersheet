import React from 'react';
import Popup from './Popup.js'
import Classes from './Classes.json';
import Races from './Races.json';

class CharacterLoader extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Reginald',
            characterClass: '',
            race: '',
            background: '',
            creatingCharacter: false,
            loadingCharacter: false
        };
    }

    createCharacter() {
        this.setState({
            creatingCharacter: true,
            loadingCharacter: false
        })
    }

    loadCharacter() {
        this.setState({
            creatingCharacter: false,
            loadingCharacter: true
        })
    }

    render() {
        return (
            <div>
                <button type='button' onClick={() => this.createCharacter()}>Create New Character</button>
                <button type='button' onClick={() => this.loadCharacter()}>Load Existing Character</button>
                <Popup status={this.state.creatingCharacter} statusCallback={() => this.setState({creatingCharacter:false})}>
                    <form>
                        <label>Name</label>
                        <input id="nameField" type="text" onChange = {(e) => this.setState({name: e.target.value})}/>
                        <br/>
                        <label>Class</label>
                        <select id = "characterClassField" type = "text" onChange = {(e) => this.setState({characterClass: e.target.value})}>
                            {Classes.map((charClass) => <option value={charClass.class} key={charClass.class}>{charClass.class}</option>)}
                        </select>
                        <br/>
                        <label>Race</label>
                        <select id = "characterClassField" type = "text" onChange = {(e) => this.setState({characterClass: e.target.value})}>
                            {Races.map((charRace) => <option value={charRace.race} key={charRace.race}>{charRace.race}</option>)}
                        </select>
                        <br/>
                    </form>
                </Popup>
                <Popup status={this.state.loadingCharacter} statusCallback={() => this.setState({loadingCharacter:false})}>
                    WIP
                </Popup>
            </div>
        );
    }
}

export default CharacterLoader;