import { darken } from 'polished';
import styled from 'styled-components';

interface ProjectContainerProps {
  $imgURL: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;

  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (max-width: 1000px) {
      gap: 2rem;
    }
  }

  > a.all-projects {
    background: ${({ theme }) => theme.primary};
    padding: 0.8rem 3rem;
    border-radius: 0.5rem;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 300;
    text-transform: uppercase;
    transition: 0.5s;

    &:hover {
      background: ${({ theme }) => darken(0.05, theme.primary)};
    }

    @media (max-width: 500px) {
      padding: 1rem;
      font-size: 1rem;
    }
  }
`;

export const ProjectContainer = styled.div<ProjectContainerProps>`
  width: 100%;
  display: flex;
  height: 25rem;
  align-items: flex-end;
  position: relative;

  > a.project-link {
    align-items: center;
    color: ${({ theme }) => theme.textPure};
    display: flex;
    font-size: 2rem;
    font-weight: 300;
    gap: 0.8rem;
    height: 4rem;
    margin: 0 0 3rem 5rem;
    transition: 0.5s;
  }

  > section {
    width: 50rem;
    height: 100%;
    background: url(${props => props.$imgURL}) no-repeat center;
    background-size: cover;
    position: relative;

    > div.overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.gradient};
      opacity: 0.75;
      transition: 0.5s;
    }

    > div.text {
      position: absolute;
      top: 3rem;
      right: -21.5rem;
      transition: 0.5s;
      width: fit-content;

      h1 {
        color: ${({ theme }) => theme.primary};
        font-size: 2.5rem;
        /* text-shadow: -4px 5px 22px #11172b; */

        width: 31rem;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-start;
        gap: 0.8rem;

        > img {
          width: 2.5rem;
        }
      }

      h2 {
        color: ${({ theme }) => theme.secondary};
        font-size: 2rem;
        font-weight: 300;
        /* text-shadow: -4px 5px 22px #11172b; */
      }
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    > a.project-link {
      margin: 3rem 5rem 0 0;
    }

    > section > div.text {
      text-align: center;
      right: 0;
      left: -9.2rem;

      h2 {
        width: 18.5rem;
        text-align: right;
      }
    }

    &:hover {
      > section > div.text {
        left: -19.8rem;
      }
    }
  }

  &:hover {
    > section {
      div.text {
        right: -32rem;
      }

      div.overlay {
        opacity: 0.4;
      }
    }

    > a.project-link {
      color: ${({ theme }) => theme.primary};
    }
  }

  @media (max-width: 1450px) {
    > section {
      width: 40rem;
    }
  }

  @media (max-width: 1000px) {
    > section {
      width: 100%;

      > div.text {
        left: 1rem;
        top: 1rem;
      }
    }

    > a.project-link {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      margin: 0;
    }

    &:nth-child(even) {
      flex-direction: row;

      > section {
        width: 100%;

        > div.text {
          left: 1rem;
          top: 1rem;
          text-align: left;
        }
      }

      > a.project-link {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        margin: 0;
      }

      &:hover {
        > section > div.text {
          left: 1rem;
        }
      }
    }
  }

  @media (max-width: 700px) {
    height: 17rem;
  }

  @media (max-width: 450px) {
    > a.project-link {
      height: auto !important;
      gap: 0.8rem;
    }

    > section > div.text {
      h1 {
        font-size: 1.5rem;
      }

      h2 {
        font-size: 1rem;
      }
    }
  }
`;
