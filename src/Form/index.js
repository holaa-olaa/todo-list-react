import './style.css';
import { useState, useRef } from 'react';

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        const newTaskTrimmed = newTaskContent.trim();

        event.preventDefault();
        setNewTaskContent("");

        if (newTaskTrimmed !== "") {
            addNewTask(newTaskTrimmed);
        };
        
        focusInput();
    };

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}
        >
            <input
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                autoFocus
                required
                ref={inputRef}
            />
            <button className="form__button" type="submit">
                Dodaj zadanie
            </button>
        </form>
    );
};

export default Form;