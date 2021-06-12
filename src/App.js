import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Contaianer from './Container';
import { useState } from 'react';

const tasks = [
  { id: 1, content: "zacząć zadanie", done: true },
  { id: 2, content: "skończyć zadanie", done: false },
];

function App() {
  const [hideDoneTask, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDoneTask => !hideDoneTask);
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
        mainContent={<Tasks tasks={tasks} hideDoneTask={hideDoneTask} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTask={hideDoneTask} toggleHideDone={toggleHideDone} />}
      />
    </Contaianer>
  );
}

export default App;