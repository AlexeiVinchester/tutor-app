import FormContainer from "../FormContainer";

export default function AddLessonForm({lesson, lessons, setLesson, setLessons}){

    const fieldValues = ['id', 'name', 'date', 'price'];

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
        <FormContainer 
            value='lesson' 
            fieldValues={fieldValues}
            onChange={handleChange}
            onClick={handleClick
            }
        />
    );
}