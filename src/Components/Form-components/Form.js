import FormLayouts from "./FormLayouts";
import { addValueToLocalStorage } from "../../localStorageWorker";

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
            addValueToLocalStorage(storageKey, param)
        }
    
        function handleChange(e){
            setParam({
                ...param, 
                [e.target.name]: e.target.value
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