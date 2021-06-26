import { StyledSection, Header, Heading } from './styles.js';

const Section = ({ title, mainContent, extraHeaderContent }) => (
    <StyledSection>
        <Header>
            <Heading>{title}</Heading>
            {extraHeaderContent}
        </Header>
        {mainContent}
    </StyledSection>
);

export default Section;