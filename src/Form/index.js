import './style.css';

const Form = () => (
    <form className="form">
        <input className="form__input" placeholder="Co jest do zrobienia?" autoFocus required />
        <button className="form__button" type="submit">Dodaj zadanie</button>
    </form>
)

export default Form;