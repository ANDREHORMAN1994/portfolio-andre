import { type ReactElement } from 'react';
import { Breakpoint, ReactElasticCarouselProps } from 'react-elastic-carousel';

export interface CarouselItem {
  id?: number;
  title: string;
  icon: ReactElement;
}

export interface Breaks extends Breakpoint {
  width: number;
}

export interface CustomCarouselProps extends ReactElasticCarouselProps {
  breakPoints: Breaks[];
  isRTL: boolean;
  showArrows: boolean;
  pagination: boolean;
  children: ReactElement[];
}
