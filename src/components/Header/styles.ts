import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  $isActive: boolean;
}

export const Container = styled.header`
  align-items: center;
  background: ${({ theme }) => `${theme.background}f2`};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  display: flex;
  justify-content: center;
  min-height: 4rem;
  padding: 0.55rem 0;
  position: relative;
  width: 100%;

  nav {
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;
    justify-content: center;
  }

  @media (max-width: 700px) {
    min-height: 3.75rem;
    padding: 0.65rem 0.85rem;

    nav {
      flex-flow: row nowrap;
      gap: 0.9rem;
      justify-content: center;
      width: auto;

      > span > span[role='tooltip'] {
        display: none;
      }
    }
  }
`;

export const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 85rem;
  padding: 0 1rem;
  width: 100%;

  nav {
    justify-content: flex-start;
  }

  @media (max-width: 1450px) {
    max-width: 70rem;
  }

  @media (max-width: 1000px) {
    max-width: 50rem;
  }

  @media (max-width: 700px) {
    justify-content: center;
    padding: 0;
  }
`;

export const HeaderIconActions = styled.div`
  align-items: center;
  display: flex;
  gap: 0.75rem;

  a {
    background: none;
    border: none;
    color: ${({ theme }) => theme.primary};
    display: flex;
    transition: 0.5s;

    &:hover,
    &:focus-visible {
      color: ${({ theme }) => lighten(0.2, theme.primary)};
    }

    > svg {
      cursor: pointer;
      height: 1.6rem;
      width: 1.6rem;
    }
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const ThemeButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.primary};
  display: flex;
  transition: 0.5s;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => lighten(0.2, theme.primary)};
  }

  > svg {
    cursor: pointer;
    height: 2rem;
    width: 2rem;
  }

  @media (max-width: 700px) {
    padding: 0.15rem;

    > svg {
      height: 1.55rem;
      width: 1.55rem;
    }
  }
`;

export const NavItemContainer = styled.div<NavLinkProps>`
  a {
    align-items: center;
    color: ${props =>
      props.$isActive ? props.theme.primary : props.theme.textHighlight};
    display: inline-flex;
    padding-bottom: 0.35rem;
    position: relative;
    text-transform: uppercase;
    transition: color 0.35s ease;

    &::after {
      background: currentColor;
      border-radius: 999px;
      bottom: 0;
      content: '';
      height: 2px;
      left: 0;
      opacity: ${props => (props.$isActive ? 1 : 0)};
      position: absolute;
      transform: scaleX(${props => (props.$isActive ? 1 : 0)});
      transform-origin: left;
      transition: opacity 0.35s ease, transform 0.35s ease;
      width: 100%;
    }

    &:hover,
    &:focus-visible {
      color: ${props =>
        props.$isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(0.2, props.theme.textHighlight)};

      &::after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }

  @media (max-width: 700px) {
    a {
      font-size: 0.75rem;
      letter-spacing: 0.03rem;
      padding: 0.4rem 0.25rem;
      text-align: center;
      white-space: nowrap;
    }
  }

  @media (max-width: 360px) {
    a {
      font-size: 0.68rem;
      letter-spacing: 0.02rem;
    }
  }
`;
