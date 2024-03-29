import InputField from "../InputField";

export default function PupilForm({pupil, pupils, setPupil, setPupils}){

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
        <div className="pupil-form-container">
            <h2 className="new-pupil-header">Add new Pupil</h2>
            <div className="inputs-container">
                <InputField fieldValue="name" onChange={handleChange}/>
                <InputField fieldValue="price" onChange={handleChange}/>
                <InputField fieldValue="form" onChange={handleChange}/>
                <InputField fieldValue="id" onChange={handleChange}/>
            </div>
            <div className="button-container">
                <button onClick={handleClick}>Add new pupil</button>
            </div>
        </div>
    );
}