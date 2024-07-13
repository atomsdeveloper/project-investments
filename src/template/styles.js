import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    width: 100vw;
    height: 100vh;
    padding-top: 60px; // O position fixed da nav faz com os outros elementos ficam atrás dela, esta prop joga para baixo os elementos, sendo o mesmo valor do height da nav.
    box-sizing: border-box;
    overflow: hidden;
  `};
`;
