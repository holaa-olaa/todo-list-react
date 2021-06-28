import styled from 'styled-components';

export const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.teal};
    margin: 0 0 0 20px;
    transition: color 0.4s;
    cursor: pointer;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.colors.darkGrey};
        cursor: not-allowed;
    }
`;