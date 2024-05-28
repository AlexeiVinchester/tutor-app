import { useState } from "react";
export default function AddTask({ handleAddTask }) {
    const [text, setText] = useState('');

    return (
        <div className="add-new-task-container">
            <input
                className="add-task-input"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <button
                onClick={() => {
                    setText('');
                    handleAddTask(text);
                }}
            >
                Add new Task
            </button>
        </div>
    );
}