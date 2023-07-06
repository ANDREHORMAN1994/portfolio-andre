import { type ReactElement } from 'react';
import { Breakpoint } from 'react-elastic-carousel';

export interface CarouselItem {
  id?: number;
  title: string;
  icon: ReactElement;
}

export interface Breaks extends Breakpoint {
  width: number;
}

export interface CustomCarouselProps {
  breakPoints: Breaks[];
  isRTL: boolean;
  children: ReactElement[];
}
