import './style.css';

const Tasks = ({tasks, hideDoneTask}) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li 
            key={task.id} 
            className={`tasks__item${task.done && hideDoneTask ? " tasks__item--hidden" : ""}`}> 
                <button className={`tasks__button tasks__button--toggleDone`}> 
                    {task.done ? "✔" : ""}
                </button>  
                <span className={`tasks__span ${task.done ? "tasks__span--done" : ""}`}>
                    {task.content}
                </span>
                <button className={`tasks__button tasks__button--remove`}>
                    🗑
                </button>
            </li>
        ))}
    </ul>
)

export default Tasks;