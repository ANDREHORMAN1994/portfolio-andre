import { type ReactElement, type ReactNode } from 'react';
import { Container, type TooltipAlign, type TooltipPosition } from './styles';

interface TooltipProps {
  align?: TooltipAlign;
  children: ReactNode;
  label: string;
  position?: TooltipPosition;
}

export function Tooltip({
  align = 'center',
  children,
  label,
  position = 'top'
}: TooltipProps): ReactElement {
  return (
    <Container $align={align} $position={position}>
      {children}
      <span role="tooltip">{label}</span>
    </Container>
  );
}

Tooltip.defaultProps = {
  align: 'center',
  position: 'top'
};
