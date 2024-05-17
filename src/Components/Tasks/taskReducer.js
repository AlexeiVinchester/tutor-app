import { addValueToLocalStorage, getCurrentValue } from "../../localStorageWorker";

export default function tasksReducer(tasks, action) {
    switch (action.type) {
        case "added" : {
            const newTask = {
                id: action.taskId,
                text: action.text,
                done: false
            } 
            
            addValueToLocalStorage('tasks', newTask);
            console.log(getCurrentValue('tasks'));
            return [
                ...tasks,
                newTask
            ]
        }
        case 'edited': {
            return tasks.map(task => {
                return task.id === action.task.id ? action.task : task;
            })
        }
        case "deleted": {
            return tasks.filter(task => task.id !== action.taskId)
        }
        default: {
            throw Error(`There is no such type: ${action.type}`)
        }
    }
}