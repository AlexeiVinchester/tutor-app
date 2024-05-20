export default function SelectSection({
    label,
    defaultValue,
    setState,
    data
}){
    return (
        <section className="select-section">
            <label className="info-label">Choose {label}: </label>
            <select defaultValue={defaultValue} onChange={(e) => setState(e.target.value)}>
                {
                    data.map(item => (
                        <option className="select-option" key={item}>{item}</option>
                    ))
                }
            </select>
        </section>
    );
}