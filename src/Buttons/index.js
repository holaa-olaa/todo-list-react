import './style.css';

const Buttons = ({ tasks, hideDoneTask, toggleHideDone, setAllDone }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button className="buttons__button" onClick={toggleHideDone}>
                    {hideDoneTask ? "Pokaż ukończone" : "Ukryj ukończone"}
                </button>
                <button 
                    className="buttons__button" 
                    disabled={tasks.every(({ done }) => done)} 
                    onClick={setAllDone}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);

export default Buttons;