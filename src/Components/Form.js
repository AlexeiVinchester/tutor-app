import FormLayouts from "./FormLayouts";

export default function Form({
    param, 
    params, 
    setParam, 
    setParams, 
    fieldsValues, 
    value}){
        
        function handleClick(){
            setParams([
                ...params, 
                {...param}
            ]);
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
                onClick={handleClick
                }
            />
        );
}