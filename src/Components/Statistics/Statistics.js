import React from "react";
import '../ComponentsStyles/Statistics.css'
import { 
            getStudents, 
            getEarnedSumForMonth,
            getAmountOfLessonsForMonth,
            getAmountOfLessonsForStudentForMonth
        } from "../../localStorageWorker";

import { useState } from "react";

export default function Statistics() {
    const months = {
        January: '2024-01',
        Febriary: '2024-02',
        March: '2024-03',
        April: '2024-04',
        May: '2024-05',
        June: '2024-06',
        July: '2024-07',
        August: '2024-08',
        September: '2024-09',
        October: '2024-10',
        November: '2024-11',
        December: '2024-12'
    };

    const students = getStudents();
    const [showSumm, setShowSumm] = useState(false);
    const [choosedStudent, setChoosedStudent] = useState(null);
    const [month, setMonth] = useState(months['January']);
    
    function handleClickShowSumm() {
        setShowSumm(!showSumm);
    }

    return (
        <div>
            <h1 className="tutor-name">Alexei Vinnichek</h1>
            <section className="select-section">
                <label className="select-label">Choose month: </label>
                <select onChange={(e) => setMonth(months[e.target.value])}>
                    {
                        Object.keys(months).map(month => (
                            <option className="select-option" key={month}>{month}</option>
                        ))
                    }
                </select>
                
            </section>
            <section className="select-section">
                <label className="select-label">Choose student: </label>
                <select onChange={(e) => setChoosedStudent(e.target.value)}>
                    {
                        students.map(student => (
                            <option className="select-option" key={student}>{student}</option>
                        ))
                    }
                </select>
                
            </section>

            <p>
                You have earned fo this period: 
                <button onClick={handleClickShowSumm}>
                    {showSumm ? 'Hide' : 'Calculate'}
                </button>
                {showSumm ? getEarnedSumForMonth(month) : '...pending'}
            </p>
            <p>
                An amount of lessons from the beginning: {getAmountOfLessonsForMonth(month)}
            </p>
            <p>
                An amount of lessons for {choosedStudent}: {getAmountOfLessonsForStudentForMonth(month, choosedStudent)}
            </p>
            
            
        </div>
    );
    
}