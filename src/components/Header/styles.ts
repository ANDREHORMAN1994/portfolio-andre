import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  $isActive: boolean;
}

export const Container = styled.header`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  display: flex;
  justify-content: center;
  min-height: 4rem;
  padding: 0.55rem 1rem;
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
      gap: 0.25rem;
      justify-content: space-between;
      width: 100%;

      > span > span[role='tooltip'] {
        display: none;
      }
    }
  }
`;

export const HeaderIconActions = styled.div`
  align-items: center;
  display: flex;
  gap: 0.75rem;
  position: absolute;
  right: 1rem;

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
    text-transform: uppercase;
    color: ${props =>
      props.$isActive ? props.theme.primary : props.theme.textHighlight};
    transition: 0.5s;

    &:hover {
      color: ${props =>
        props.$isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(0.2, props.theme.textHighlight)};
    }
  }

  @media (max-width: 700px) {
    a {
      display: block;
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
