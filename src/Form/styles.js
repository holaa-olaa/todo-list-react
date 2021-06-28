import styled from 'styled-components';

export const StyledForm = styled.form`
    font-size: 16px;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const SubmitButton = styled.button`
    background-color: ${({ theme }) => theme.colors.teal};
    color: hsl(0, 0%, 100%);
    padding: 10px;
    border: none;
    cursor: pointer;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.1);
        transition: 0.4s;
    }

    &:active {
        filter: brightness(120%);
    }
`;

export const Input = styled.input`
    border: 1px solid hsl(0, 0%, 93%);
    padding: 10px;
`;