import styled from 'styled-components';

export const Container = styled.div`
  scroll-margin-top: 1rem;
  width: 100%;
`;

export const CarouselContainer = styled.section`
  align-items: center;
  border-bottom: 3px solid ${({ theme }) => theme.primary};
  display: flex;
  gap: 1rem;
  margin-top: 4rem;
  width: 100%;

  @media (max-width: 700px) {
    border-bottom: none;
    display: block;
    margin-top: 3.5rem;
  }
`;

export const CarouselViewport = styled.div`
  --experience-carousel-padding: 1.5rem;

  overflow-x: auto;
  overflow-y: hidden;
  padding: 2.25rem var(--experience-carousel-padding) 2.75rem;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 700px) {
    overflow: visible;
    padding: 0;
  }
`;

export const CarouselTrack = styled.div`
  display: grid;
  gap: 2rem;
  grid-auto-columns: calc((100% - 2rem) / 2);
  grid-auto-flow: column;

  @media (max-width: 1000px) {
    gap: 1rem;
    grid-auto-columns: calc((100% - 1rem) / 2);
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-inline: 0;
  }
`;

export const CarouselButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.secondary};
  flex: 0 0 auto;
  font-size: 2rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.08);
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

interface ItemContainerProps {
  $width: string;
}

export const ItemContainer = styled.div<ItemContainerProps>`
  min-width: 0;
  scroll-snap-align: start;
  width: 100%;

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
    transition: filter 0.5s ease, transform 0.5s ease;

    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    h2 {
      color: ${({ theme }) => theme.secondary};
      font-size: 1.5rem;
      font-weight: 300;
      margin-bottom: 0.5rem;
    }

    h3 {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      color: ${({ theme }) => theme.textPure};
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 1rem;

      svg {
        color: ${({ theme }) => theme.primary};
        flex-shrink: 0;
      }
    }

    ul {
      color: ${({ theme }) => theme.textLight};
      display: flex;
      flex-direction: column;
      font-size: 1rem;
      font-weight: 300;
      gap: 0.45rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      display: flex;
      gap: 0.55rem;
      line-height: 1.35;

      &::before {
        background: ${({ theme }) => theme.primary};
        border-radius: 50%;
        content: '';
        flex: 0 0 0.35rem;
        height: 0.35rem;
        margin-top: 0.5rem;
        width: 0.35rem;
      }
    }
  }

  &:hover > div {
    filter: brightness(1.3);
    transform: translateY(-20px) scale(1.02);
  }

  /* &:nth-child(even) {
    margin-top: 4rem;
  } */

  @media (max-width: 1000px) {
    > div {
      height: 18rem;
      padding-top: 1.5rem;

      h1 {
        font-size: 1.2rem;
        margin-bottom: 0.75rem;
      }

      h2 {
        font-size: 1rem;
      }

      h3 {
        font-size: 0.9rem;
        margin-bottom: 0.75rem;
      }

      ul {
        font-size: 0.9rem;
        gap: 0.35rem;
      }

      li {
        gap: 0.45rem;
        line-height: 1.3;

        &::before {
          margin-top: 0.45rem;
        }
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

      h3 {
        font-size: 1rem;
      }

      ul {
        font-size: 1rem;
      }
    }
  }
`;
