import { getCurrentValue, setNewValue } from "../../localStorageWorker";

export default function tasksReducer(tasks, action) {
    switch (action.type) {
        case "added" : {
            const newTasks = [
                ...tasks,
                {
                    id: action.taskId,
                    text: action.text,
                    done: false
                } 
            ]
            setNewValue('tasks', newTasks);
            console.log(getCurrentValue('tasks'));
            return newTasks;
        }
        case 'edited': {
            return tasks.map(task => {
                return task.id === action.task.id ? action.task : task;
            })
        }
        case "deleted": {
            const newListOfTasks = tasks.filter(task => task.id !== action.taskId);
            setNewValue('tasks', newListOfTasks);
            console.log(`New list after delete`);
            console.log(getCurrentValue('tasks'));
            return newListOfTasks;
        }
        default: {
            throw Error(`There is no such type: ${action.type}`)
        }
    }
}