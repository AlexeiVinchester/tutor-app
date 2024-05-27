import { getFullEarnedSumm, getFullAmountOfLessons, getCurrentValue } from "../../localStorageWorker";
import InfoCircle from "./InfoCircle";
import Table from "../Table-components/Table";
import { fieldsValuesForLessons } from "./usefulConstants";
import { students } from "./usefulConstants";
import { useState } from "react";
import SelectSection from "./SelectSection";
import InfoSection from "./InfoSection";
import { 
    getAmountOfLessonsFor,
    getFullIncomePerStudent,
    getLessonsForStudent
} from "../../localStorageWorker";

export default function FullStatistics(){

    const [student, setStudent] = useState(students[0]);
    
    return (
        <div className="full-statistics-container">
            <div className="full-stat-for-all">
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
                    caption="Full lessons" 
                    columnNames={fieldsValuesForLessons} 
                    data={getCurrentValue('lessons')} 
                    className="lessons-table"
                />
            </div>
            
            <div className="full-stat-for-student">
                <SelectSection 
                    label="student"
                    defaultValue={students[0]}
                    setState={setStudent}
                    data={students}
                />
                <InfoSection
                    header="Number of lessons per student"
                    value={getAmountOfLessonsFor(student)}
                />
                <InfoSection
                    header="Full income per student"
                    value={getFullIncomePerStudent(student)}
                />
                <Table 
                    caption="Lesson per Student" 
                    columnNames={fieldsValuesForLessons} 
                    data={getLessonsForStudent(student)} 
                    className="lessons-table"
                />
            </div>
        </div>
    );
}