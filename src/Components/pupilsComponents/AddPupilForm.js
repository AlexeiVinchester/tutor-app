import FormContainer from "../FormContainer";

export default function PupilForm({pupil, pupils, setPupil, setPupils}){

    const fieldValues = ['id', 'name', 'price', 'form'];

    function handleClick(){
        setPupils([
            ...pupils, 
            {...pupil}
        ]);
    }

    function handleChange(e){
        setPupil({
            ...pupil, 
            [e.target.name]: e.target.value
        })
    }

    return (
        <FormContainer 
            value='pupil' 
            fieldValues={fieldValues}
            onChange={handleChange}
            onClick={handleClick
            }
        />
    );
}