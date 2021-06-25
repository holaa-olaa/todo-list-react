import { List, Item, Content, Button } from './styles.js';

const Tasks = ({ tasks, hideDoneTask, removeTasks, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Item
                key={task.id}
                hidden={task.done && hideDoneTask}
            >
                <Button
                    toggleDone
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </Button>
                <Content done={task.done}>
                    {task.content}
                </Content>
                <Button
                    remove
                    onClick={() => removeTasks(task.id)}
                >
                    🗑
                </Button>
            </Item>
        ))}
    </List>
);

export default Tasks;