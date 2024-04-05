import { useState } from "react";
import { lessons as initialLessons } from "./lessons";
import LessonsTable from "./LessonsTable";
import '../ComponentsStyles/FormStyles.css'
import Form from "../Form";

export default function LessonContainer(){
    const [lesson, setLesson] = useState({});
    const [lessons, setLessons] = useState(initialLessons);
    const fieldsValues = ['id', 'name', 'date', 'price'];

    return (
        <div className="lesson-container">
            <LessonsTable lessons={lessons}/>
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
