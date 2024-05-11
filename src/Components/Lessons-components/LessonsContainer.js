import { useState } from "react";
import '../ComponentsStyles/FormStyles.css'
import Form from "../Form-components/Form";
import { getCurrentValue } from "../../localStorageWorker";
export default function LessonContainer(){
    const [lesson, setLesson] = useState({});
    const [lessons, setLessons] = useState(() => getCurrentValue('lessons'));
    const fieldsValues = ['id', 'name', 'date', 'price'];
    
    return (
        <div className="lesson-container">
            <Form 
                param={lesson}
                setParam={setLesson}
                params={lessons}
                setParams={setLessons}
                fieldsValues={fieldsValues}
                value="lesson"
            />
        </div>
        
    );
}
