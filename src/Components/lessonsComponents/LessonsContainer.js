import { useState } from "react";
import { lessons as initialLessons } from "./lessons";
import AddLessonForm from "./AddLessonForm";
import LessonsTable from "./LessonsTable";
import '../ComponentsStyles/FormStyles.css'

export default function LessonContainer(){
    const [lesson, setLesson] = useState({});
    const [lessons, setLessons] = useState(initialLessons);

    return (
        <div className="lesson-container">
            <LessonsTable lessons={lessons}/>
            <AddLessonForm 
                lesson={lesson}
                setLesson={setLesson}
                lessons={lessons}
                setLessons={setLessons}
            />
        </div>
        
    );
}
