import { darken } from 'polished';
import styled from 'styled-components';

export const ProjectDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
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
      width: 100%;
    }

    > h2 {
      color: ${({ theme }) => theme.textPure};
      font-size: 2rem;
      font-weight: 600;
      text-align: left;
      width: 100%;
      margin: 2rem 0;
    }

    > ul {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin: 1rem 0;
      width: 100%;

      > li {
        color: #fff;
        background-color: ${({ theme }) => theme.secondary};
        padding: 0.8rem 2rem;
        border-radius: 0 0.5rem;
        font-weight: 500;
        min-width: max-content;
        transition: 0.5s;

        &:hover {
          &:hover {
            cursor: default;
            background: ${({ theme }) => darken(0.1, theme.secondary)};
          }
        }
      }

      @media (max-width: 700px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: dense;

        > li {
          padding: 0.7rem 1.2rem;
          font-size: 0.8rem;
          min-width: 100%;
        }

        > li.li-complete {
          grid-column: 1/3;
        }
      }
    }

    > div {
      display: flex;
      gap: 1rem;

      a {
        align-items: center;
        background: ${({ theme }) => theme.primary};
        border-radius: 0.5rem;
        color: #fff;
        cursor: pointer;
        display: flex;
        font-size: 1.5rem;
        font-weight: 300;
        margin-top: 2rem;
        min-width: max-content;
        padding: 0.8rem 2rem;
        text-transform: uppercase;
        transition: 0.5s;

        &:hover {
          background: ${({ theme }) => darken(0.1, theme.primary)};
        }
      }
    }

    @media (max-width: 700px) {
      padding: 0 2.5rem;

      p {
        font-size: 1rem;
      }

      h2 {
        font-size: 1.2rem;
      }

      > div {
        flex-direction: column;
        gap: 0;
        width: 100%;

        a {
          justify-content: center;
          margin: 0.5rem 0;
          padding: 0.7rem 2rem;
          font-size: 1.2rem;
          font-weight: 500;
          width: 100%;

          > svg {
            width: 1.6rem;
            height: 1.6rem;
            margin: 0;
            padding: 0;
          }
        }
      }
    }
  }
`;
