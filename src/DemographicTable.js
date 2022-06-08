import React from 'react'

class DemographicTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            characterClass: '',
            race: '',
            background: '',
        };
    }

    renderRow(header, data) {
        return (
            <div>
                {header}: {data}
            </div>
        );
    }


    render() {
        return (
            <div className='demographicTable'>
                {this.renderRow('Name', this.state.name)}
                {this.renderRow('Class', this.state.name)}
                {this.renderRow('Race', this.state.name)}
                {this.renderRow('Background', this.state.name)}
            </div>
        );
    }
}

export default DemographicTable;