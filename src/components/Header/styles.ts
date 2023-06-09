import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

interface ButtonIconProps {
  status: boolean;
}

export const Container = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

export const ButtonIcon = styled.button<ButtonIconProps>`
  background: none;
  border: none;

  > svg {
    color: ${({ theme, status }) => (status ? theme.primary : theme.primary)};
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;

export const NavItemContainer = styled.nav<NavLinkProps>`
  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.textHighlight};
    transition: 0.5s;

    &:hover {
      color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(0.2, props.theme.textHighlight)};
    }
  }
`;
