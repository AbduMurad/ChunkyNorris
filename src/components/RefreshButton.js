import React from 'react';
import './RefreshButton.css';

const RefreshButton = ({refreshPage}) => {
    return (
        <button onClick={refreshPage}>Another Funny Joke</button>
    )
}

export default RefreshButton;