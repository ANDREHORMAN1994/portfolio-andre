import styled, { css } from 'styled-components';

interface ContainerProps {
  $bottomOffset: number;
  $footerOffset: number;
  $isProjectDetailsPage: boolean;
}

export const Container = styled.aside<ContainerProps>`
  align-items: center;
  backdrop-filter: blur(0.7rem);
  background: ${({ theme }) => theme.backgroundLight};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 2rem;
  bottom: ${({ $bottomOffset, $footerOffset }) =>
    `${$bottomOffset + $footerOffset}px`};
  box-shadow: 0 0.4rem 1rem rgb(0 0 0 / 20%);
  display: flex;
  gap: 0.3rem;
  padding: 0.35rem;
  position: fixed;
  right: max(1rem, calc((100vw - 85rem) / 2 + 1rem));
  transition: bottom 0.2s ease;
  z-index: 10;

  ${({ $isProjectDetailsPage }) =>
    $isProjectDetailsPage &&
    css`
      bottom: auto;
      top: 5rem;
    `}

  > svg {
    color: ${({ theme }) => theme.secondary};
    flex: 0 0 auto;
    height: 1.15rem;
    margin: 0 0.2rem;
    width: 1.15rem;
  }

  @media (max-width: 1450px) {
    right: max(1rem, calc((100vw - 70rem) / 2 + 1rem));
  }

  @media (max-width: 1000px) {
    right: max(1rem, calc((100vw - 50rem) / 2 + 1rem));
  }

  @media (max-width: 700px) {
    border-radius: 1.25rem;
    bottom: auto;
    flex-direction: column;
    gap: 0.2rem;
    padding: 0.25rem;
    right: 2rem;
    top: 4.75rem;

    > svg {
      height: 0.95rem;
      margin: 0.1rem 0;
      width: 0.95rem;
    }
  }

  @media (max-width: 420px) {
    right: 1rem;
    top: 4.35rem;
  }
`;

interface LanguageButtonProps {
  $active: boolean;
}

export const LanguageButton = styled.button<LanguageButtonProps>`
  align-items: center;
  background: ${({ $active, theme }) =>
    $active ? theme.primary : 'transparent'};
  border: none;
  border-radius: 1.5rem;
  color: ${({ $active, theme }) => ($active ? '#fff' : theme.secondary)};
  display: flex;
  height: 2rem;
  justify-content: center;
  padding: 0;
  transition: 0.3s;
  width: 2.25rem;

  &:hover {
    background: ${({ $active, theme }) =>
      $active ? theme.primary : 'transparent'};
  }

  &:focus-visible {
    background: ${({ $active, theme }) =>
      $active ? theme.primary : 'transparent'};
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }

  > span {
    font-size: 1.05rem;
    line-height: 1;
  }

  @media (max-width: 700px) {
    height: 1.7rem;
    width: 1.7rem;

    > span {
      font-size: 0.9rem;
    }
  }
`;
