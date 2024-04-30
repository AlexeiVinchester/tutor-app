import React from "react";
import { 
            getEarnedSumm, 
            getAmountOfLessons,
            getAmountOfLessonsFor,
            getStudents 
        } from "../../localStorageWorker";

import { useState } from "react";

export default function Statistics() {
    const months = [
        'January',
        'Febriary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const [showSumm, setShowSumm] = useState(false);
    const [choosedStudent, setChoosedStudent] = useState(null);

    function handleClickShowSumm() {
        setShowSumm(!showSumm);
    }

    return (
        <div>
            <h1>Alexei Vinnichek</h1>
            <section>
                <label>Choose month</label>
                <select>
                    {
                        months.map(month => (
                            <option key={month}>{month}</option>
                        ))
                    }
                </select>
            </section>
            <p>
                You have earned fo this period: 
                <button onClick={handleClickShowSumm}>
                    {showSumm ? 'Hide' : 'Calculate'}
                </button>
                {showSumm ? getEarnedSumm() : '...pending'}
            </p>
            <p>
                An amount of lessons from the beginning: {getAmountOfLessons()}
            </p>
            <section>
                <label>Choose student: </label>
                <select onClick={(e) => setChoosedStudent(e.target.value)}>
                    {
                        getStudents().map(student => (
                            <option key={student}>{student}</option>
                        ))
                    }
                </select>
            </section>
            <p>
                An amount of lessons for {choosedStudent}: {getAmountOfLessonsFor(choosedStudent)}
            </p>
            
            
        </div>
    );
    
}