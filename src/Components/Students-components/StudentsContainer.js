import { useState } from "react";
import '../ComponentsStyles/FormStyles.css'
import Form from "../Form-components/Form";
import Table from "../Table-components/Table";
import { getCurrentValue } from "../../localStorageWorker";

export default function StudentContainer(){
    const [student, setStudent] = useState({});
    const [students, setStudents] = useState(() => getCurrentValue('pupils'));
    const fieldsValues = ['id', 'name', 'price', 'form'];

    return (
        <div className="pupil-container">
            <Table 
                caption='Pupils' 
                columnNames={fieldsValues} 
                data={students} 
                className="pupils-table"
            />
            <Form 
                param={student}
                setParam={setStudent}
                params={students}
                setParams={setStudents}
                fieldsValues={fieldsValues}
                value="pupil"
            />
        </div>
    );
}