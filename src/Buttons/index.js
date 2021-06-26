import {ButtonsContainer, Button} from './styles.js';

const Buttons = ({ tasks, hideDoneTask, toggleHideDone, setAllDone }) => (
    <ButtonsContainer>
        {tasks.length > 0 && (
            <>
                <Button onClick={toggleHideDone}>
                    {hideDoneTask ? "Pokaż ukończone" : "Ukryj ukończone"}
                </Button>
                <Button 
                    disabled={tasks.every(({ done }) => done)} 
                    onClick={setAllDone}
                >
                    Ukończ wszystkie
                </Button>
            </>
        )}
    </ButtonsContainer>
);

export default Buttons;