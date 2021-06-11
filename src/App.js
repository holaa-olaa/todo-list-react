import Form from './Form';
import Tasks from './Tasks';
import ButtonsContainer from './ButtonsContainer';
import Section from './Section';
import Contaianer from './Container';

const tasks = [
  { id: 1, content: "zacząć zadanie", done: true} ,
  { id: 2, content: "skończyć zadanie", done: false} ,
];

const hideDoneTask = false;

function App() {
  return (
    <Contaianer>
    <h1>Lista zadań</h1>
    <Section 
      title={"Dodaj nowe zadanie"} 
      mainContent={<Form/>}
    />

    <Section 
      title={"Lista zadań"} 
      mainContent={<Tasks tasks={tasks} hideDoneTask={hideDoneTask}/>} 
      extraHeaderContent={<ButtonsContainer tasks={tasks} hideDoneTask={hideDoneTask}/>}
    />
</Contaianer>
  );
}

export default App;