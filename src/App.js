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

  return (
    <Contaianer>
      <h1>Lista zadań</h1>

      <Section
        title={"Dodaj nowe zadanie"}
        mainContent={<Form />}
      />

      <Section
        title={"Lista zadań"}
        mainContent=
        {<Tasks 
          tasks={tasks} 
          hideDoneTask={hideDoneTask}
          removeTasks={removeTasks}
        />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTask={hideDoneTask} toggleHideDone={toggleHideDone} />}
      />
    </Contaianer>
  );
}

export default App;