import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    width: 100vw;
    height: 10%;

    /* position: fixed; */
    /* z-index: 999; */

    display: flex;

    background-color: ${theme.bgColor.light};
  `};
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    width: 25%;

    display: flex;
    align-items: center;
    justify-content: start;

    padding-left: 1rem;

    background-color: ${theme.bgColor.dark};
  `};
`;

export const ItemsMenu = styled.div`
  ${() => css`
    width: 75%;

    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;

    padding-right: 1rem;

    background-color: red;
  `};
`;
