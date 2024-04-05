import InputField from "./InputField"

export default function InputContainer({fieldValues, onChange}){
    return (
        <div className="inputs-container">
            {
                fieldValues.map(fieldValue => (
                    <InputField 
                        key={fieldValue} 
                        fieldValue={fieldValue} 
                        onChange={onChange} 
                    />
                ))
            }
        </div>
    );
}