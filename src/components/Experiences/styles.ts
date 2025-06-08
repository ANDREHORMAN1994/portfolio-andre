import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > section {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    margin-top: 7rem;
    gap: 5rem;
    padding-bottom: 8rem;
    border-bottom: 3px solid ${({ theme }) => theme.primary};
    overflow-x: auto;

    @media (max-width: 1000px) {
      gap: 1rem;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      margin-top: 5rem;
      gap: 2rem;
    }
  }
`;

interface ItemContainerProps {
  width: string;
}

export const ItemContainer = styled.div<ItemContainerProps>`
  width: ${({ width }) => `calc(${width} - 2.5rem)`};
  min-width: ${({ width }) => `calc(${width} - 2.5rem)`};

  > div {
    background: ${({ theme }) => theme.gradient};
    padding: 1rem;
    padding-top: 2.5rem;
    height: 20rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    transition: 0.5s;

    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    h2 {
      color: ${({ theme }) => theme.secondary};
      font-size: 1.5rem;
      font-weight: 300;
      margin-bottom: 1rem;
    }

    p {
      color: ${({ theme }) => theme.textLight};
      font-size: 1rem;
      font-weight: 300;
    }
  }

  &:hover > div {
    filter: brightness(1.3);
    transform: translateY(-20px);
  }

  /* &:nth-child(even) {
    margin-top: 4rem;
  } */

  @media (max-width: 1000px) {
    > div {
      height: 15rem;
      padding-top: 1.5rem;

      h1 {
        font-size: 1.2rem;
        margin: 1rem;
      }

      h2 {
        font-size: 1rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 700px) {
    width: 100%;
    min-width: 100%;

    > div {
      height: auto;
      padding: 2rem;

      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;
