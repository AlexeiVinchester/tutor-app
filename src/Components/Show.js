import ListOfPupils from "./ListOfPupils";
import PupilForm from "./PupilForm";
import { pupils as initialPupils } from "../tutoringData/pupils";
import { useState } from "react";

export default function Show(){
    const [pupil, setPupil] = useState({});
    const [pupils, setPupils] = useState(initialPupils);
    return (
        <>
            <ListOfPupils pupils={pupils} />
            <PupilForm 
                pupil={pupil}
                pupils={pupils}
                setPupil={setPupil}
                setPupils={setPupils}
            />
        </>
    );

}