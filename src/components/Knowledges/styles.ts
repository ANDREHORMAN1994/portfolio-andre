import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > section {
    width: 100%;
    margin-top: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7rem;
    flex-wrap: wrap;

    @media (max-width: 1000px) {
      gap: 5rem;
    }

    @media (max-width: 700px) {
      gap: 3rem;
      flex-wrap: wrap;
      margin-top: 5rem;
    }
  }
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;

  p {
    color: ${({ theme }) => theme.primary};
    font-weight: 300;
    font-size: 1.3rem;
    /* text-transform: uppercase; */
  }

  svg {
    width: 6rem;
    height: 6rem;
    color: ${({ theme }) => theme.secondary};
    transition: 0.3s;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.primary};
      transform: scale(0.95);
    }
  }

  @media (max-width: 1000px) {
    p {
      font-size: 1rem;
    }

    svg {
      width: 5rem;
      height: 5rem;
    }
  }
`;

export const CarouselContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  width: 100%;
`;

export const CarouselViewport = styled.div`
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CarouselTrack = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-columns: calc((100% - 4rem) / 5);
  grid-auto-flow: column;
  padding: 0.5rem;

  @media (max-width: 1200px) {
    grid-auto-columns: calc((100% - 3rem) / 4);
  }

  @media (max-width: 768px) {
    grid-auto-columns: calc((100% - 2rem) / 3);
  }

  @media (max-width: 550px) {
    grid-auto-columns: 100%;
  }
`;

export const CarouselButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.secondary};
  font-size: 2rem;
  transition: 0.3s;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.primary};
  }
`;
