import styled, { css } from 'styled-components';

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 20px;
`;

export const Item = styled.li`
    border-bottom: 1px solid hsl(0, 0%, 93%);
    padding: 10px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    grid-gap: 10px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    word-break: break-word;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    height: 30px;
    width: 30px;
    color: hsl(0, 0%, 100%);
    padding: 0;
    cursor: pointer;
    transition: background 0.3s;

    ${({toggleDone}) => toggleDone && css`
        background-color: hsl(120, 61%, 30%);

        &:hover {
            background-color: hsl(120, 61%, 35%);
        }
        &:active {
            background-color: hsl(120, 61%, 40%);
        }
    `}

    ${({remove}) => remove && css`
        background-color: hsl(348, 83%, 45%);

        &:hover {
            background-color: hsl(348, 83%, 50%);
        }
        &:active {
            background-color: hsl(348, 83%, 55%);
        }
    `}
`;