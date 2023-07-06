import { darken } from 'polished';
import styled from 'styled-components';

export const ProjectDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  > main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    width: 100%;
    padding: 0 5rem;

    p {
      color: ${({ theme }) => theme.textPure};
      font-size: 1.5rem;
      font-weight: 300;
      text-align: justify;
    }

    button {
      background: ${({ theme }) => theme.primary};
      padding: 0.8rem 3rem;
      border-radius: 0.5rem;
      border: none;
      transition: 0.5s;
      margin-top: 2rem;

      &:hover {
        background: ${({ theme }) => darken(0.1, theme.primary)};
      }

      a {
        color: ${({ theme }) => theme.textPure};
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: 300;
      }
    }

    @media (max-width: 700px) {
      padding: 0 2.5rem;

      p {
        font-size: 1rem;
      }

      button {
        padding: 0.7rem 2rem;
        width: 100%;

        a {
          font-size: 1rem;
          font-weight: 500;
        }
      }
    }
  }
`;
