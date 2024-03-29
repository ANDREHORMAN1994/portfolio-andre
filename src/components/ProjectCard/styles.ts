import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  > a {
    position: relative;
    width: 100%;
    background: url(${({ imgUrl }) => imgUrl}) no-repeat center;
    background-size: cover;
    /* background: #ccc; */
    height: 10rem;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.border};
    transition: 0.5s;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      border-color: ${({ theme }) => theme.primary};

      > div.overlay {
        opacity: 0.5;
      }
    }

    > section {
      z-index: 2;
      h1 {
        color: ${({ theme }) => theme.primary};
        font-size: 1.3rem;
        text-shadow: 2px 2px 4px rgb(0 0 0 / 50%);
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;

        > img {
          width: 1.5rem;
        }
      }
      h2 {
        color: ${({ theme }) => theme.secondary};
        font-size: 1rem;
        font-weight: 500;
      }
    }

    > div.overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.gradient};
      opacity: 0.8;
      transition: 0.5s;
      left: 0;
      top: 0;
    }
  }
`;
