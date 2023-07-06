import { type ReactNode } from 'react';
import { Breakpoint, ReactElasticCarouselProps } from 'react-elastic-carousel';

export interface CarouselItem {
  id?: number;
  title: string;
  icon: ReactNode;
}

export interface Breaks extends Breakpoint {
  width: number;
}

export interface CustomCarouselProps extends ReactElasticCarouselProps {
  breakPoints: Breaks[];
  isRTL: boolean;
  children: ReactNode[];
}
