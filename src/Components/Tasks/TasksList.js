import { useState } from "react";

export default function TaskList({tasks, handleEditTask, handleDeleteTask}) {
    return (
        <ul className="ul-of-tasks">
            {
                tasks.map(task => (
                    <Task 
                        task={task} 
                        handleDeleteTask={handleDeleteTask}
                        handleEditTask={handleEditTask}
                    />
                ))
            }
        </ul>
    );
}

function Task({task, handleDeleteTask, handleEditTask}) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if(isEditing) {
        taskContent = (
            <>
                <input 
                    value={task.text}
                    onChange={(e) => handleEditTask({
                        ...task,
                        text: e.target.value,
                    })}
                />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }

    return (
        <label>
            <input 
                type="checkbox"
                checked={task.done}
                onChange={(e) => {
                    handleEditTask({
                        ...task,
                        done: e.target.checked,
                    })
                }}
            />
            {taskContent}
            <button onClick={() => handleDeleteTask(task.id)}>Delete task</button>
        </label>
    );
}