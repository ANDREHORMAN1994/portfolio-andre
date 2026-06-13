import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  margin-top: 10rem;
  border-top: 1px solid ${({ theme }) => theme.backgroundLight};
  height: 5rem;
  align-items: center;
  justify-content: center;

  > div {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-content: space-between;

    button {
      align-items: center;
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.secondary};
      display: inline-flex;
      font-size: 0.95rem;
      font-weight: 300;
      gap: 0.35rem;
      justify-self: flex-start;
      overflow: hidden;
      text-transform: uppercase;
      transition: border-color 0.3s ease, color 0.3s ease, padding 0.3s ease;

      &:hover,
      &:focus-visible {
        color: ${({ theme }) => theme.primary};
        padding-right: 0.85rem;

        .scroll-label {
          max-width: 9rem;
          opacity: 1;
          transform: translateX(0);
        }
      }

      .scroll-icon {
        align-items: center;
        display: flex;
        flex: 0 0 auto;
      }

      svg {
        height: 2rem;
        width: 2rem;
      }

      .scroll-label {
        max-width: 0;
        opacity: 0;
        overflow: hidden;
        transform: translateX(-0.35rem);
        transition: max-width 0.3s ease, opacity 0.25s ease, transform 0.3s ease;
        white-space: nowrap;
      }
    }

    > p {
      color: ${({ theme }) => theme.text};
      font-size: 0.95rem;
      font-weight: 300;
      text-align: center;
    }

    > section {
      align-items: center;
      display: flex;
      gap: 1rem;
      justify-self: flex-end;

      svg {
        width: 2rem;
        height: 2rem;
        color: ${({ theme }) => theme.text};
        transition: 0.5s;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.primary};
        }
      }
    }

    @media (max-width: 450px) {
      display: flex;
      gap: 1rem;
      justify-content: space-between;

      button {
        justify-self: center;

        &:hover,
        &:focus-visible {
          padding-right: 0rem;
        }

        .scroll-label {
          display: none;
        }
      }

      > p {
        font-size: 0.85rem;
      }

      > section {
        gap: 0.5rem;
        justify-self: center;

        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;
