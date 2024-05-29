import { useState } from "react";
import InfoSection from "./InfoSection";
import SelectSection from "./SelectSection";
import {
    getEarnedSumForMonth,
    getAmountOfLessonsForMonth,
    getIncomeForStudentPerMonth,
    getAmountOfLessonsForStudentForMonth,
    getLessonsForMonth,
    getLessonsForStudentForMonth,
} from "../../localStorageWorker";
import { months, currentMonth, currentYear, allStudents, years, getMonthName } from "./usefulConstants";
import Table from "../Table-components/Table";
import { fieldsValuesForLessons } from "./usefulConstants";

export default function MonthStatistics() {

    const [choosedStudent, setChoosedStudent] = useState(allStudents[0]);
    const [month, setMonth] = useState(months[currentMonth]);
    const [year, setYear] = useState(currentYear);

    const monthName = getMonthName(month);

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
                    defaultValue={allStudents[0]}
                    setState={setChoosedStudent}
                    data={allStudents}
                />
            </div>
            <div className="choosed-info-container flex-row">
                <div className="month-info-container flex-column">
                    <div className="flex-row">
                        <InfoSection
                            header={`Income in ${monthName}`}
                            value={getEarnedSumForMonth(month, year)}
                        />
                        <InfoSection
                            header={`Number of lessons in ${monthName}`}
                            value={getAmountOfLessonsForMonth(month, year)}
                        />
                    </div>
                    <Table 
                        caption={`All lessons in ${monthName}`}
                        columnNames={fieldsValuesForLessons}
                        className='lessons-table'
                        data={getLessonsForMonth(month, year)}
                    />
                </div>
                <div className="student-info-container flex-column">
                    <div className="flex-row">
                        <InfoSection
                            header={`Income for ${choosedStudent} in ${monthName}`}
                            value={getIncomeForStudentPerMonth(month, year, choosedStudent)}
                        />
                        <InfoSection
                            header={`Number of lessons for ${choosedStudent}`}
                            value={getAmountOfLessonsForStudentForMonth(month, year, choosedStudent)}
                        />
                    </div>
                    
                    {
                        !getLessonsForStudentForMonth(month, year, choosedStudent).length ?
                        <h2 className="no-lessons">{`There were no lessons with ${choosedStudent} in ${monthName}`}</h2> :
                        <Table 
                            caption={`Lessons for ${choosedStudent}`}
                            columnNames={fieldsValuesForLessons}
                            className='lessons-table'
                            data={getLessonsForStudentForMonth(month, year, choosedStudent)}
                        />
                    }
                </div>
            </div>
        </div>
    );
}
