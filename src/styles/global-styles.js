import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; /* Inclui padding e border no cálculo do height */
    }
    body {
        ${({ theme }) => css`
            font-family: ${theme.fontFamily.default};
        `}
    }
    h1 {
        ${({ theme }) => css`
            font-family: ${theme.fontFamily.default};
        `}
    }
`;
