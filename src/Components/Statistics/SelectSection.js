import { months } from "./usefulConstants";

export default function SelectSection({
    label,
    defaultValue,
    setState,
    data
}){

    function onChange(e) {
        if(label === 'month') {
            return setState(months[e.target.value]);
        } else {
            return setState(e.target.value)
        }
    }

    return (
        <section className="select-section">
            <label className="info-label">Choose {label}: </label>
            <select defaultValue={defaultValue} onChange={onChange}>
                {
                    data.map(item => (
                        <option className="select-option" key={item}>{item}</option>
                    ))
                }
            </select>
        </section>
    );
}