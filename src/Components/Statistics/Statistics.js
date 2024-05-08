import React from "react";
import '../ComponentsStyles/Statistics.css'
import { 
            getStudents, 
            getEarnedSumForMonth,
            getAmountOfLessonsForMonth,
            getAmountOfLessonsForStudentForMonth,
            getIncomeForStudentPerMonth,
            getFullEarnedSumm,
            getFullAmountOfLessons
        } from "../../localStorageWorker";
import Table from "../Table-components/Table";
import { useState } from "react";
import { getCurrentValue } from "../../localStorageWorker";
import InfoCircle from "./InfoCircle";
import InfoSection from "./InfoSection";
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
    const fieldsValues = ['id', 'name', 'date', 'price'];
    const students = getStudents();

    const [choosedStudent, setChoosedStudent] = useState(students[0]);
    const [month, setMonth] = useState(months['January']);
    
    return (
        <div>
            <h1 className="tutor-name text-style">Alexei Vinnichek</h1>
            <div className="statistics-container">
                <div className="choosed-statistics">
                    <div className="section-container">
                        <section className="select-section">
                            <label className="info-label">Choose month: </label>
                            <select onChange={(e) => setMonth(months[e.target.value])}>
                                {
                                    Object.keys(months).map(month => (
                                        <option className="select-option" key={month}>{month}</option>
                                    ))
                                }
                            </select>
                            
                        </section>
                        <section className="select-section">
                            <label className="info-label">Choose student: </label>
                            <select onChange={(e) => setChoosedStudent(e.target.value)}>
                                {
                                    students.map(student => (
                                        <option className="select-option" key={student}>{student}</option>
                                    ))
                                }
                            </select>
                        </section>
                    </div>
                    <div className="choosed-info-container">
                        <div className="month-info-container flex-row">
                            <InfoSection 
                                header="Income this month"
                                value={getEarnedSumForMonth(month)}
                            />
                            <InfoSection 
                                header="Number of lessons per month"
                                value={getAmountOfLessonsForMonth(month)}
                            />
                        </div>
                        <div className="student-info-container flex-row">
                            <InfoSection 
                                header="Income for student per month"
                                value={getIncomeForStudentPerMonth(month, choosedStudent)}
                            />
                            <InfoSection 
                                header={`Number of lessons per ${choosedStudent}`}
                                value={getAmountOfLessonsForStudentForMonth(month, choosedStudent)}
                            />
                        </div>
                    </div>
                </div>
                <div className="full-statistics">
                    <div className="full-info-container flex-row">
                        <div className="select-section">
                            <h3 className="info-label">Income per full period</h3>
                            <InfoCircle value={getFullEarnedSumm()} />  
                        </div>
                        <div className="select-section">
                            <h3 className="info-label">Number of lessons per full period</h3>
                            <InfoCircle value={getFullAmountOfLessons()} />
                        </div>
                    </div>
                    <Table 
                        caption="Lessons" 
                        columnNames={fieldsValues} 
                        data={getCurrentValue('lessons')} 
                        className="lessons-table"
                    />
                </div>
            </div>
            
        </div>
    );
    
}