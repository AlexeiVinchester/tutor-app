import { useState } from "react";
import InfoSection from "./InfoSection";
import {
    getStudents,
    getEarnedSumForMonth,
    getAmountOfLessonsForMonth,
    getIncomeForStudentPerMonth,
    getAmountOfLessonsForStudentForMonth
} from "../../localStorageWorker";

const months = {
    January: '01',
    February: '02',
    March: '03',
    April: '04',
    May: '05',
    June: '06',
    July: '07',
    August: '08',
    September: '09',
    October: '10',
    November: '11',
    December: '12'
};

const currentMonth = Object.keys(months)[new Date().getMonth()];
const currentYear = String(new Date().getFullYear());
const students = getStudents();
const years = ['2023', '2024'];


export default function MonthStatistics() {
    
    const [choosedStudent, setChoosedStudent] = useState(students[0]);
    const [month, setMonth] = useState(months[currentMonth]);
    const [year, setYear] = useState(currentYear);
    console.log(choosedStudent);
    console.log(month);
    console.log(year);
    console.log(getEarnedSumForMonth(month, year));
    return (
        <div className="choosed-statistics">
            <div className="section-container">
                <section className="select-section">
                    <label className="info-label">Choose year: </label>
                    <select defaultValue={currentYear} onChange={(e) => setYear(e.target.value)}>
                        {
                            years.map(year => (
                                <option className="select-option" key={year}>{year}</option>
                            ))
                        }
                    </select>
                </section>
                <section className="select-section">
                    <label className="info-label">Choose month: </label>
                    <select defaultValue={currentMonth} onChange={(e) => setMonth(months[e.target.value])}>
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
                        value={getEarnedSumForMonth(month, year)}
                    />
                    <InfoSection
                        header="Number of lessons per month"
                        value={getAmountOfLessonsForMonth(month, year)}
                    />
                </div>
                <div className="student-info-container flex-row">
                    <InfoSection
                        header="Income for student per month"
                        value={getIncomeForStudentPerMonth(month, year, choosedStudent)}
                    />
                    <InfoSection
                        header={`Number of lessons per ${choosedStudent}`}
                        value={getAmountOfLessonsForStudentForMonth(month, year, choosedStudent)}
                    />
                </div>
            </div>
        </div>
    );
}
