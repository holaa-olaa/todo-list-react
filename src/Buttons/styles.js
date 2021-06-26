import styled from 'styled-components';

export const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    border: none;
    background-color: transparent;
    color: hsl(180, 100%, 25%);
    margin: 0 0 0 20px;
    transition: color 0.4s;
    cursor: pointer;

    @media(max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        color: hsl(180, 100%, 30%);
    }

    &:active {
        color: hsl(180, 100%, 35%);
    }

    &:disabled {
        color: hsla(0, 4%, 50%, 0.3);
        cursor: not-allowed;
    }
`;