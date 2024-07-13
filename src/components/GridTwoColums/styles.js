import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    background-color: red;
    height: calc(100vh - 60px);


    display: grid;
    grid-template-columns: repeat(10, 1fr);
  `};
`;

export const Aside = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    /* display: grid; */

    grid-column-start: 1;
    grid-column-end: 3;

    grid-row-start: 1;

    padding-top: 10px;


    background-color: ${theme.bgColor.light};
  `};
`;

export const Content = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    /* display: grid; */

    grid-column-start: 3;
    grid-column-end: 11;

    grid-row-start: 1;

    padding: 20px;

    background-color: ${theme.bgColor.grey};
  `};
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    height: 30px;
    font-size: 15pt;

    color: ${theme.textColor.blue};
  `};
`;

export const Section = styled.section`
  ${() => css`
    height: 80px;
    gap: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `};
`;

export const BgBudget = styled.div`
  ${({ theme }) => css`
    width: 165px;
    height: 50px;

    display: flex;
    align-items: center;


    padding: 10px;
    border-radius: 8px;
    background-color: ${theme.bgColor.light};

    box-shadow: 0px 6px 30px 0px rgba(186, 180, 186, 0.77);
  `};
`;
