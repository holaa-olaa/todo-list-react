import styled from 'styled-components';

export const StyledSection = styled.section`
    border: 1px solid ${({ theme }) => theme.colors.grey};
    background-color: ${({ theme }) => theme.colors.white};
    margin: 10px auto;
`;

export const Header = styled.header`
    border-bottom: solid 1px ${({ theme }) => theme.colors.grey};
    padding: 20px;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: space-between;
    grid-gap: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        grid-template-columns: 1fr;
    }
`;

export const Heading = styled.h2`
    font-size: 20px;
    margin: 0;
`;