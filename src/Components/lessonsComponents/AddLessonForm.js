import InputField from "../InputField";


export default function AddLessonForm({lesson, lessons, setLesson, setLessons}){

    function handleClick(){
        setLessons([
            ...lessons, 
            {...lesson}
        ]);
    }

    function handleChange(e){
        setLesson({
            ...lesson, 
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="lesson-form-container">
            <h2 className="new-lesson-header">Add new Lesson</h2>
            <div className="inputs-container">
                <InputField fieldValue="id" onChange={handleChange}/>
                <InputField fieldValue="name" onChange={handleChange}/>
                <InputField fieldValue="date" onChange={handleChange}/>
                <InputField fieldValue="price" onChange={handleChange}/>
            </div>
            <div className="button-container">
                <button onClick={handleClick}>Add new lesson</button>
            </div>
        </div>
    );
}