import { getFullEarnedSumm, getFullAmountOfLessons, getCurrentValue } from "../../localStorageWorker";
import InfoCircle from "./InfoCircle";
import Table from "../Table-components/Table";
import { fieldsValuesForLessons } from "./usefulConstants";

export default function FullStatistics(){
    
    return (
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
                columnNames={fieldsValuesForLessons} 
                data={getCurrentValue('lessons')} 
                className="lessons-table"
            />
        </div>
    );
}