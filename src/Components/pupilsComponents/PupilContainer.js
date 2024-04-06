import { useState } from "react";
import { pupils as initialPupils} from "./pupils";
import '../ComponentsStyles/FormStyles.css'
import Form from "../Form";
import Table from "../Table";

export default function PupilContainer(){
    const [pupil, setPupil] = useState({});
    const [pupils, setPupils] = useState(initialPupils);
    const fieldsValues = ['id', 'name', 'price', 'form'];

    return (
        <div className="pupil-container">
            <Table caption='Pupils' columnNames={fieldsValues} data={pupils} />
            <Form 
                param={pupil}
                setParam={setPupil}
                params={pupils}
                setParams={setPupils}
                fieldsValues={fieldsValues}
                value="pupil"
            />
        </div>
    );
}