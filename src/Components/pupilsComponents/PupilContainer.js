import { useState } from "react";
import { pupils as initialPupils} from "./pupils";
import ListOfPupils from "./ListOfPupils";
import PupilForm from "./AddPupilForm";
import '../ComponentsStyles/FormStyles.css'

export default function PupilContainer(){
    const [pupil, setPupil] = useState({});
    const [pupils, setPupils] = useState(initialPupils);
    
    return (
        <div className="pupil-container">
            <ListOfPupils pupils={pupils} />
            <PupilForm 
                pupil={pupil}
                pupils={pupils}
                setPupil={setPupil}
                setPupils={setPupils}
            />
        </div>
    );
}