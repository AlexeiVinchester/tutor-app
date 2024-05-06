import { getNextId } from "../../localStorageWorker";

export default function InputField({ fieldValue, onChange, value }) {
    
    return (
        <div className="input-container">
            <label>
                {fieldValue[0].toUpperCase() + fieldValue.slice(1) + ": "} 
            </label>
            {
                fieldValue !== 'id' ? 
                <input 
                    name={fieldValue} 
                    onChange={onChange} 
                    placeholder={`Enter new ${fieldValue}`} /> :
                <input value={getNextId(value)} readOnly/>
            }
        </div>
        
    );
}