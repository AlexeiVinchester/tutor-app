import { useReducer} from "react";
import taskReducer from "./taskReducer";
import AddTask from "./AddTask";
import '../ComponentsStyles/FormStyles.css'
import TaskList from "./TasksList";
import { getCurrentValue } from "../../localStorageWorker";

const initialTasks = getCurrentValue('tasks');
let nextId = initialTasks.length;


export default function Tasks() {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

    function handleAddTask(text) {
        dispatch({
            type: 'added',
            text: text,
            taskId: nextId++
        })
    }

    function handleEditTask(task) {
        dispatch({
            type: 'edited',
            task: task
        })
    }

    function handleDeleteTask(taskId){
        dispatch({
            type: 'deleted',
            taskId: taskId
        })
    }

    return (
        <div className="tasks-container">
            <h1 className="tasks-container-header">
                Tasks you need to do
            </h1>
            <AddTask handleAddTask={handleAddTask} />
            <TaskList 
                tasks={tasks}
                handleDeleteTask={handleDeleteTask}
                handleEditTask={handleEditTask}
            />
        </div>
    );
}