import InputContainer from "./InputContainer";
import FormHeader from "./FormHeader";
import AddButton from "./AddButton";

export default function FormLayouts({value, fieldValues, onChange, onClick}){
    return (
        <div className={`${value}-form-container`}>
            <FormHeader value={value} />
            <InputContainer fieldValues={fieldValues} onChange={onChange} />
            <AddButton onClick={onClick} value={value}  />
        </div>
    );
}