import './style.css';
import { useState } from 'react';

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            setNewTaskContent ("");
            return;
        };
        setNewTaskContent("");
        addNewTask(newTaskContent.trim());       
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                autoFocus
                required />
            <button className="form__button" type="submit">Dodaj zadanie</button>
        </form>
    );
}

export default Form;