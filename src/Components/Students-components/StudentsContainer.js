import { useState } from "react";
import '../ComponentsStyles/FormStyles.css'
import Form from "../Form-components/Form";
import Table from "../Table-components/Table";
import { getCurrentValue } from "../../localStorageWorker";

export default function StudentContainer(){
    const [student, setStudent] = useState({});
    const [students, setStudents] = useState(() => getCurrentValue('students'));
    const fieldsValues = ['id', 'name', 'price', 'form'];
    
    return (
        <div className="students-container">
            <Table 
                caption='Students' 
                columnNames={fieldsValues} 
                data={students} 
                className="students-table"
            />
            <Form 
                param={student}
                setParam={setStudent}
                params={students}
                setParams={setStudents}
                fieldsValues={fieldsValues}
                value="student"
            />
        </div>
    );
}