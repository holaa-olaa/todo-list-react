import styled from 'styled-components';

export const StyledSection = styled.section`
    border: 1px solid hsl(0, 0%, 93%);
    background: hsl(0, 0%, 100%);
    margin: 10px auto;
`;

export const Header = styled.header`
    border-bottom: solid 1px hsl(0, 0%, 93%);
    padding: 20px;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: space-between;
    grid-gap: 20px;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Heading = styled.h2`
    font-size: 20px;
    margin: 0;
`;