import { useState } from "react";
import InfoSection from "./InfoSection";
import SelectSection from "./SelectSection";
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

    return (
        <div className="choosed-statistics">
            <div className="section-container">
                <SelectSection 
                    label="year"
                    defaultValue={currentYear}
                    setState={setYear}
                    data={years}
                />
                <SelectSection 
                    label="month"
                    defaultValue={currentMonth}
                    setState={setMonth}
                    data={Object.keys(months)}
                />
                <SelectSection 
                    label="student"
                    defaultValue={students[0]}
                    setState={setChoosedStudent}
                    data={students}
                />
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
