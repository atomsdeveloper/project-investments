import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    gap: 0.3rem;
    display: flex;

    color: ${theme.textColor.dark};
  `}
`;

export const ContainerIcon = styled.div`
  ${({ theme, pointer }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    color: ${theme.textColor.dark};

    :hover {
      cursor: ${pointer};
    }
  `}
`;

export const ContainerDesc = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    color: ${theme.textColor.dark};
  `}
`;

export const Desc = styled.p`
  ${({ size, color }) => css`
    text-align: start;
    text-transform: uppercase;
    font-size: ${size};

    color: ${color};
  `}
`;
