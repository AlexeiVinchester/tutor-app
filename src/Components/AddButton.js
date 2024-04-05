export default function AddButton({onClick, value}){
    return (
        <div className="button-container">
            <button onClick={onClick}>Add new {value}</button>
        </div>
    );
}