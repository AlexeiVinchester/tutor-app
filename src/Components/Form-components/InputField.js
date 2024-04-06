
export default function InputField({ fieldValue, onChange}) {
    return (
        <div className="input-container">
            <label for={fieldValue}>
                {fieldValue[0].toUpperCase() + fieldValue.slice(1) + ": "} 
            </label>
            <input 
                name={fieldValue} 
                onChange={onChange} 
                placeholder={`Enter new ${fieldValue}`}
            />
        </div>
        
    );
}