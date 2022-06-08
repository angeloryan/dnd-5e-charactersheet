import './Popup.css'
import React from 'react';

class Popup extends React.Component {
    render() {
        return this.props.status ? (
            <div className='popupPage'>
                <div className='inner'>
                    <button className='closeButton' onClick={() => this.props.statusCallback(false)}>Cancel</button>
                    {this.props.children}
                </div>
            </div>
        ) : '';
    }
}

export default Popup;