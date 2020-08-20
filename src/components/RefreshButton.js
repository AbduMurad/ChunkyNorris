import React from 'react';
import './RefreshButton.css';

const RefreshButton = ({refreshPage, props}) => {
    return (
        <button onClick={refreshPage}>{props}</button>
    )
}

export default RefreshButton; 