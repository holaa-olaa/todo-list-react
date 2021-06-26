import { StyledForm, SubmitButton, Input } from './styles.js';
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
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                placeholder="Co jest do zrobienia?"
                autoFocus
                required
                ref={inputRef}
            />
            <SubmitButton type="submit">
                Dodaj zadanie
            </SubmitButton>
        </StyledForm>
    );
};

export default Form;