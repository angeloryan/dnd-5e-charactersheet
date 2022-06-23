import React from 'react';
import Classes from './Classes.json';

function LevelUp(props) {
    const levelUp = (chosenClass, lvl) => {
        var leveledClass = Classes.find(item => item.class === chosenClass);
        var newStats = leveledClass.levelUp[lvl - 1];
        
        let map = props.characterStats.abilityScores;
        console.log(leveledClass);
        
        if (typeof(newStats) != 'undefined' && 'asi' in newStats) {
            for (const key in newStats.asi) {
                map[key] +=  newStats.asi[key];
            }
        }

        props.updateCharacterStats({
            ...props.characterStats,
            level: lvl,
            abilityScores: map
        })
    };

    return (
        <div>
            <button type='button' onClick={() => levelUp(props.characterStats.characterClass, props.characterStats.level + 1)}>Level Up</button>
        </div>
    );
};

export default LevelUp;