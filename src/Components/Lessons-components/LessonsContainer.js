import { useState } from "react";
import { lessons as initialLessons } from "./lessons";
import '../ComponentsStyles/FormStyles.css'
import Form from "../Form-components/Form";
import Table from "../Table-components/Table";

export default function LessonContainer(){
    const [lesson, setLesson] = useState({});
    const [lessons, setLessons] = useState(initialLessons);
    const fieldsValues = ['id', 'name', 'date', 'price'];

    return (
        <div className="lesson-container">
            <Table caption="Lessons" columnNames={fieldsValues} data={lessons} />
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
