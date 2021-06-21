import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Contaianer from './Container';
import { useEffect, useState } from 'react';


function App() {
  const [hideDoneTask, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  const toggleHideDone = () => {
    setHideDone(hideDoneTask => !hideDoneTask);
  };

  const removeTasks = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => task.id === id ? { ...task, done: !task.done } : task))
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
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
};

export default App;