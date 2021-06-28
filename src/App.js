import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Container from './Container';
import { useState } from 'react';
import { useTasks } from './useTasks';

function App() {
  const [hideDoneTask, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDoneTask => !hideDoneTask);
  };

  const {
    tasks,
    removeTasks,
    toggleTaskDone,
    setAllDone,
    addNewTask
  } = useTasks();

  return (
    <Container>
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
    </Container>
  );
};

export default App;