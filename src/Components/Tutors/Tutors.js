import React from "react";
import { getEarnedSumm } from "../../localStorageWorker";
import { useState } from "react";

export default function Tutors() {

    const [showSumm, setShowSumm] = useState(false);
    const earnedSumm = getEarnedSumm();

    function handleClick() {
        setShowSumm(!showSumm);
    }

    return (
        <div>
            <h1>Alexei Vinnichek</h1>
            <button onClick={handleClick}>
                {showSumm ? 'Hide' : 'Calculate'}
            </button>
            <p>{showSumm ? earnedSumm : '...pending'}</p>
        </div>
    );
    
}