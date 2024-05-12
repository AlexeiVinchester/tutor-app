import React from "react";
import '../ComponentsStyles/Statistics.css'
import { useState } from "react";

import FullStatistics from "./FullStatistics";
import MonthStatistics from "./MonthStatistics";

export default function Statistics() {
    const fieldsValues = ['id', 'name', 'date', 'price'];
    
    const [showMonthStat, setShowMonthStat] = useState(false);
    const [showFullStat, setShowFullStat] = useState(false);

    function handleClickMonth() {
        setShowMonthStat(!showMonthStat);
        setShowFullStat(false);
    }

    function handleClickFull() {
        setShowMonthStat(false);
        setShowFullStat(!showFullStat);
    }

    return (
        <div>
            <h1 className="tutor-name text-style">Alexei Vinnichek</h1>
            <button onClick={handleClickMonth}>Show month statistics</button>
            <button onClick={handleClickFull}>Show full statistics</button>
            <div className="statistics-container">
            {
                showFullStat ? 
                <FullStatistics fieldsValues={fieldsValues}/> : 
                (showMonthStat ? <MonthStatistics /> : null)
            }
            </div>
        </div>
    );
    
}