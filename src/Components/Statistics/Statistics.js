import React from "react";
import '../ComponentsStyles/Statistics.css'
import { useState } from "react";

import FullStatistics from "./FullStatistics";
import MonthStatistics from "./MonthStatistics";

export default function Statistics() {
    
    const [showMonthStat, setShowMonthStat] = useState(true);
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
        <div className="statistics">
            <h1 className="tutor-name text-style">Alexei Vinnichek</h1>
            <div className="button-box">
                <button 
                    type="button" 
                    className={`toggle-button ${showMonthStat ? "active-button" : ''}`}
                    onClick={handleClickMonth}
                >
                    Show month statistics
                </button>
                <button 
                    type="button" 
                    className={`toggle-button ${showFullStat ? "active-button" : ''}`} 
                    onClick={handleClickFull}
                >
                    Show full statistics
                </button>
            </div>
            
            <div className="statistics-container">
            {
                showFullStat ? 
                <FullStatistics /> : 
                (showMonthStat ? <MonthStatistics /> : null)
            }
            </div>
        </div>
    );
    
}