import React from 'react';

function DemographicData(props) {
    const renderRow = (header, data) => {
        return (
                <p>{header}: {data}</p>
        );
    }

    return (
        <div>
            {'name' in props.characterStats ? renderRow('Name', props.characterStats['name']) : ''}
            {'characterClass' in props.characterStats ? renderRow('Class', props.characterStats['characterClass']) : ''}
            {'race' in props.characterStats ? renderRow('Race', props.characterStats['race']) : ''}
            {'background' in props.characterStats ? renderRow('Background', props.characterStats['background']) : ''}
            {'level' in props.characterStats ? renderRow('Level', props.characterStats['level']) : ''}
        </div>
    );
};

export default DemographicData;