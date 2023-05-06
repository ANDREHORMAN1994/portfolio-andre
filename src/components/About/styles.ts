import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > section {
    display: flex;
    padding: 5rem 0;

    > img {
      width: 25rem;
      margin-right: 8rem;
      flex: 1;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.primary};
      box-shadow: 5px 10px 10px black;
    }
  }
`;

export const TextContainer = styled.div`
  color: ${({ theme }) => theme.secondary};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* background: red; */

  p {
    font-size: 1.3rem;
  }

  span {
    font-weight: 500;
  }
`;
