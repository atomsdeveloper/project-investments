import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    width: 100vw;
    height: 60px;

    position: fixed;
    top: 0;

    display: flex;

    background-color: ${theme.bgColor.light};

    box-shadow: 0px 6px 30px 0px rgba(186, 180, 186, 0.77);
  `};
`;

export const Logo = styled.div`
  ${() => css`
    width: 25%;

    display: flex;
    align-items: center;
    justify-content: start;

    padding-left: 1rem;

    img {
      width: 85px;
    }
  `};
`;

export const ItemsMenu = styled.div`
  ${() => css`
    width: 75%;

    display: flex;
    align-items: center;
    justify-content: end;
    gap: 2rem;

    padding-right: 1rem;
  `};
`;

export const MenuButton = styled.div`
  ${() => css`
    width: 20px;
    height: 20px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #3CA8D6;

    :hover {
      cursor: pointer;
    }
  `};
`;
