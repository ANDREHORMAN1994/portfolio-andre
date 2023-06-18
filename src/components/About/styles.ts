import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > section {
    display: flex;
    padding: 5rem 0;

    > img {
      width: 25rem;
      height: 25rem;
      margin-right: 8rem;
      flex: 1;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.primary};
      box-shadow: 5px 10px 10px black;
    }

    @media (max-width: 1000px) {
      align-items: center;
      justify-content: center;

      > img {
        width: 20rem;
        height: 20rem;
      }

      p {
        font-size: 1rem;
      }

      span {
        font-weight: 500;
      }
    }

    @media (max-width: 720px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-bottom: 0;

      > img {
        margin: 0;
        margin-bottom: 5rem;
      }
    }
  }
`;

export const TextContainer = styled.div`
  color: ${({ theme }) => theme.secondary};
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    font-size: 1.3rem;
  }

  span {
    font-weight: 500;
  }
`;
