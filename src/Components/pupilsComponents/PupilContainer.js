import { useState } from "react";
import { pupils as initialPupils} from "./pupils";
import ListOfPupils from "./ListOfPupils";
import '../ComponentsStyles/FormStyles.css'
import Form from "../Form";

export default function PupilContainer(){
    const [pupil, setPupil] = useState({});
    const [pupils, setPupils] = useState(initialPupils);
    const fieldsValues = ['id', 'name', 'price', 'form'];

    return (
        <div className="pupil-container">
            <ListOfPupils pupils={pupils} />
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