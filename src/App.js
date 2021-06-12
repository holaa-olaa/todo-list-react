import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Contaianer from './Container';
import { useState } from 'react';


function App() {
  const [hideDoneTask, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "zacząć zadanie", done: true },
    { id: 2, content: "skończyć zadanie", done: false },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDoneTask => !hideDoneTask);
  };

  const removeTasks = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }))
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task, 
      done: true,
    })));
  };

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks, 
      {
        content, 
        done: false, 
        id: tasks.length ? tasks[tasks.length - 1].id +1 : 1,
      },
    ]);
  };

  return (
    <Contaianer>
      <h1>Lista zadań</h1>

      <Section
        title={"Dodaj nowe zadanie"}
        mainContent={<Form addNewTask={addNewTask} />}
      />

      <Section
        title={"Lista zadań"}
        mainContent=
          {<Tasks
          tasks={tasks}
          hideDoneTask={hideDoneTask}
          removeTasks={removeTasks}
          toggleTaskDone={toggleTaskDone}
          />}
        extraHeaderContent=
          {<Buttons 
          tasks={tasks} 
          hideDoneTask={hideDoneTask} 
          toggleHideDone={toggleHideDone}
          setAllDone={setAllDone}
            />}
      />
    </Contaianer>
  );
}

export default App;