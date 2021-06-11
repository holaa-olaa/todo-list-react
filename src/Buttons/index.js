import './style.css';

const Buttons = ({ tasks, hideDoneTask }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button className="buttons__button">
                    {hideDoneTask ? "Pokaż ukończone" : "Ukryj ukończone"}
                </button>
                <button className="buttons__button" disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);

export default Buttons;