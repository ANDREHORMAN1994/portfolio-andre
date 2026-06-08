import styled from 'styled-components';

export const Container = styled.aside`
  align-items: center;
  backdrop-filter: blur(0.7rem);
  background: ${({ theme }) => theme.backgroundLight};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 2rem;
  bottom: 1.25rem;
  box-shadow: 0 0.4rem 1rem rgb(0 0 0 / 20%);
  display: flex;
  gap: 0.3rem;
  padding: 0.35rem;
  position: fixed;
  right: 1.25rem;
  z-index: 10;

  > svg {
    color: ${({ theme }) => theme.secondary};
    height: 1.2rem;
    margin: 0 0.25rem;
    width: 1.2rem;
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
  font-size: 0.75rem;
  font-weight: 600;
  gap: 0.3rem;
  padding: 0.45rem 0.55rem;
  transition: 0.3s;

  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme.primary};
    color: #fff;
  }

  > span:first-child {
    font-size: 1rem;
    line-height: 1;
  }
`;
