import React from 'react';
import './style.css';

const ButtonsContainer = ({ tasks, hideDoneTask }) => (
    <div className="section__buttonsContainer">
        {tasks.length > 0 && (
            <>
                <button className="section__button">
                    {hideDoneTask ? "Pokaż ukończone" : "Ukryj ukończone"}
                </button>
                <button
                className="section__button"
                disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </>

        )}
    </div>
);

export default ButtonsContainer;