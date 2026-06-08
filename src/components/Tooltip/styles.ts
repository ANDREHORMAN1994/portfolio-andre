import styled, { css, type RuleSet } from 'styled-components';

export type TooltipAlign = 'start' | 'center' | 'end';
export type TooltipPosition = 'top' | 'bottom';

interface ContainerProps {
  $align: TooltipAlign;
  $position: TooltipPosition;
}

const getHorizontalPosition = ({ $align }: ContainerProps): RuleSet<object> => {
  if ($align === 'start') {
    return css`
      left: 0;

      &::after {
        left: 0.8rem;
      }
    `;
  }

  if ($align === 'end') {
    return css`
      right: 0;

      &::after {
        right: 0.8rem;
      }
    `;
  }

  return css`
    left: 50%;
    translate: -50% 0;

    &::after {
      left: 50%;
      translate: -50% 0;
    }
  `;
};

const getVerticalPosition = ({
  $position
}: ContainerProps): RuleSet<object> => {
  if ($position === 'top') {
    return css`
      bottom: calc(100% + 0.7rem);

      &::after {
        border-bottom: 1px solid ${({ theme }) => theme.border};
        border-right: 1px solid ${({ theme }) => theme.border};
        bottom: -0.3rem;
      }
    `;
  }

  return css`
    top: calc(100% + 0.7rem);

    &::after {
      border-left: 1px solid ${({ theme }) => theme.border};
      border-top: 1px solid ${({ theme }) => theme.border};
      top: -0.3rem;
    }
  `;
};

export const Container = styled.span<ContainerProps>`
  display: inline-flex;
  position: relative;

  > span[role='tooltip'] {
    background: ${({ theme }) => theme.inputBackground};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 0.55rem;
    box-shadow: 0 0.65rem 1.4rem rgb(0 0 0 / 22%);
    color: ${({ theme }) => theme.secondary};
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.01rem;
    line-height: 1.25;
    max-width: min(14rem, calc(100vw - 1.5rem));
    opacity: 0;
    padding: 0.48rem 0.65rem;
    pointer-events: none;
    position: absolute;
    scale: 0.96;
    text-align: center;
    transition: opacity 0.2s ease, scale 0.2s ease;
    visibility: hidden;
    white-space: normal;
    width: max-content;
    z-index: 20;
    ${getHorizontalPosition};
    ${getVerticalPosition};

    &::after {
      background: ${({ theme }) => theme.inputBackground};
      content: '';
      height: 0.55rem;
      position: absolute;
      rotate: 45deg;
      width: 0.55rem;
    }
  }

  &:hover,
  &:focus-within {
    > span[role='tooltip'] {
      opacity: 1;
      scale: 1;
      visibility: visible;
    }
  }
`;
