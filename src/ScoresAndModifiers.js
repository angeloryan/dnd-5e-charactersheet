import React from 'react';

function ScoresAndModifiers(props) {
    const renderRow = (header, data) => {
        return (
                <p>{header}: {data}</p>
        );
    }

    return 'abilityScores' in props.characterStats ? (
        <div>
            {renderRow('Strength', props.characterStats.abilityScores.Strength)}
            {renderRow('Dexterity', props.characterStats.abilityScores.Dexterity)}
            {renderRow('Constitution', props.characterStats.abilityScores.Constitution)}
            {renderRow('Intelligence', props.characterStats.abilityScores.Intelligence)}
            {renderRow('Wisdom', props.characterStats.abilityScores.Wisdom)}
            {renderRow('Charisma', props.characterStats.abilityScores.Charisma)}
        </div>
    ) : '';
};

export default ScoresAndModifiers;