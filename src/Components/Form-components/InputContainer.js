import InputField from "./InputField"
export default function InputContainer({fieldValues, onChange, value}){
    return (
        <div className="inputs-container">
            {
                fieldValues.map(fieldValue => (
                    <InputField 
                        value={value}
                        key={fieldValue} 
                        fieldValue={fieldValue} 
                        onChange={onChange} 
                    />
                ))
            }
        </div>
    );
}