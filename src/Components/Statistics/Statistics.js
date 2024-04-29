import React from "react";
import { 
            getEarnedSumm, 
            getAmountOfLessons,
            getAmountOfLessonsFor,
            getStudents 
        } from "../../localStorageWorker";

import { useState } from "react";

export default function Statistics() {

    const [showSumm, setShowSumm] = useState(false);
    const earnedSumm = getEarnedSumm();

    function handleClick() {
        setShowSumm(!showSumm);
    }

    return (
        <div>
            <h1>Alexei Vinnichek</h1>
            <p>
                You have earned fo this period: 
                <button onClick={handleClick}>
                    {showSumm ? 'Hide' : 'Calculate'}
                </button>
                {showSumm ? earnedSumm : '...pending'}
            </p>
            <p>
                An amount of lessons from the beginning: {getAmountOfLessons()}
            </p>
            <section>
                <label>Choose student: </label>
                <select>
                    {
                        getStudents().map(student => (
                            <option key={student}>{student}</option>
                        ))
                    }
                </select>
            </section>
            <p>
                An amount of lessons for Bogdana: {getAmountOfLessonsFor('Bogdana')}
            </p>
            
            
        </div>
    );
    
}