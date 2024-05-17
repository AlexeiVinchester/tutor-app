import FormLayouts from "./FormLayouts";
import { addValueToLocalStorage } from "../../localStorageWorker";
import { getNextId } from "../../localStorageWorker";
export default function Form({
    param, 
    params, 
    setParam, 
    setParams, 
    fieldsValues, 
    value}){
        
        const storageKey = value + 's';
        function handleClick(){
            setParams([
                ...params, 
                {...param}
            ]);
            addValueToLocalStorage(storageKey, param);
            alert(`New ${value} was added successfully!`);
        }
        
        function handleChange(e){
            setParam({
                ...param, 
                id: getNextId(value),
                [e.target.name]: e.target.value.trim()
            })
        }
        return (
            <FormLayouts 
                value={value} 
                fieldValues={fieldsValues}
                onChange={handleChange}
                onClick={handleClick}
            />
        );
}