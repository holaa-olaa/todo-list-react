import './style.css';

const Section = ({ title, mainContent, extraHeaderContent }) => (
    <section className="section">
        <header className="section__header">
            <h2 className="section__heading">{title}</h2>
            {extraHeaderContent}
        </header>
        {mainContent}
    </section>
)

export default Section;