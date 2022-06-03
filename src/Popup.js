import React from 'react';
import "./Popup.css";

function Popup(props) {
  return (props.trigger) ? (
    <div className = "popup">
        <div className = "popupInner">
            <button className = "closeButton" onClick = {() => props.onTrigger(false)}>Cancel</button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup;