import { useState } from "react";
import '../ComponentsStyles/FormStyles.css'
import Form from "../Form-components/Form";
import Table from "../Table-components/Table";
import { getCurrentValue } from "../../localStorageWorker";

export default function PupilContainer(){
    const [pupil, setPupil] = useState({});
    const [pupils, setPupils] = useState(() => getCurrentValue('pupils'));
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