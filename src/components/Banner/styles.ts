import styled from 'styled-components';

interface ContainerProps {
  $imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  background: url(${({ $imgUrl }) => $imgUrl}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 27rem;
  overflow: hidden;
  padding: 3.5rem 0 5.5rem;
  position: relative;
  width: 100%;

  &::after {
    background: ${({ theme }) =>
      `linear-gradient(180deg, ${theme.background}00 0%, ${theme.background} 100%)`};
    bottom: 0;
    content: '';
    height: 12rem;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  > section {
    margin: 0 auto;
    max-width: 85rem;
    padding: 0 1rem;
    width: 100%;
    z-index: 2;
  }

  section {
    h1 {
      color: ${({ theme }) => theme.primary};
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: flex-start;
      gap: 0.85rem;
      font-size: 3.4rem;
      font-weight: 800;
      line-height: 1.05;

      > img {
        background: ${({ theme }) => `${theme.primary}1f`};
        border: 1px solid ${({ theme }) => `${theme.primary}66`};
        border-radius: 0.5rem;
        padding: 0.35rem;
        width: 3.4rem;
      }
    }

    h2 {
      color: ${({ theme }) => theme.secondary};
      font-size: 1.8rem;
      font-weight: 400;
      margin-top: 0.5rem;
    }
  }

  > div.overlay {
    background: ${({ theme }) =>
      `linear-gradient(90deg, ${theme.background}f7 0%, ${theme.background}db 36%, ${theme.background}8f 68%, ${theme.background}5c 100%)`};
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: 0.5s;
    width: 100%;
  }

  @media (max-width: 1450px) {
    > section {
      max-width: 70rem;
    }
  }

  @media (max-width: 1000px) {
    min-height: 25rem;

    > section {
      max-width: 50rem;
    }

    section h1 {
      font-size: 2.7rem;
    }
  }

  @media (max-width: 700px) {
    min-height: 20rem;
    padding: 2.5rem 0 4.25rem;

    > section {
      padding: 0 2rem;
    }

    section {
      h1 {
        font-size: 1.85rem;
        gap: 0.6rem;

        > img {
          padding: 0.25rem;
          width: 2.4rem;
        }
      }

      h2 {
        font-size: 1.15rem;
      }
    }
  }
`;
