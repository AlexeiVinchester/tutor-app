import { useState } from "react";
import InfoSection from "./InfoSection";
import { 
    getStudents,
    getEarnedSumForMonth,
    getAmountOfLessonsForMonth,
    getIncomeForStudentPerMonth,
    getAmountOfLessonsForStudentForMonth
} from "../../localStorageWorker";

export default function MonthStatistics(){
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
    const students = getStudents();
    const years = ['2023', '2024'];
    const [choosedStudent, setChoosedStudent] = useState(students[0]);
    const [month, setMonth] = useState(months['January']);
    const [year, setYear] = useState('2023');
    return (
        <div className="choosed-statistics">
            <div className="section-container">
                <section className="select-section">
                    <label className="info-label">Choose year: </label>
                    <select onChange={(e) => setYear(e.target.value)}>
                        {
                            years.map(year => (
                                <option className="select-option" key={year}>{year}</option>
                            ))
                        }
                    </select>
                </section>
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