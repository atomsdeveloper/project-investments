import styled, { css } from 'styled-components';

export const Budget = styled.div`
  ${({ theme }) => css`
    gap: 1.2rem;
    display: flex;

    color: ${theme.textColor.dark};
  `}
`;

export const BoxBudget = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    color: ${theme.textColor.dark};
  `}
`;

export const Desc = styled.p`
  ${() => css`
    text-align: start;
    font-weight: 100;
    text-transform: uppercase;
  `}
`;
