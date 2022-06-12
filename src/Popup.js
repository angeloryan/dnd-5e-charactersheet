import './Popup.css'
import React from 'react';

function Popup(props) {
    return props.status ? (
        <div className='popupPage'>
            <div className='inner'>
                <button className='closeButton' onClick={() => props.statusCallback(false)}>Cancel</button>
                {props.children}
            </div>
        </div>
    ) : '';
}

export default Popup;