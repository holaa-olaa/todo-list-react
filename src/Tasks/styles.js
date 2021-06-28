import styled, { css } from 'styled-components';

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 20px;
`;

export const Item = styled.li`
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
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
    color: ${({ theme }) => theme.colors.white};
    padding: 0;
    cursor: pointer;
    transition: background 0.3s;

    ${({ toggleDone }) => toggleDone && css`
        background: ${({ theme }) => theme.colors.green};

        &:hover {
            filter: brightness(110%);
        }
        &:active {
            filter: brightness(120%);
        }
    `}

    ${({ remove }) => remove && css`
        background: ${({ theme }) => theme.colors.red};

        &:hover {
            filter: brightness(110%);
        }
        &:active {
            filter: brightness(120%);
        }
    `}
`;