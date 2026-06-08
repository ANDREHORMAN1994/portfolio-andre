import { type ReactElement } from 'react';

export interface CarouselItem {
  id?: number;
  title: string;
  icon: ReactElement;
}

export interface CustomCarouselProps {
  children: ReactElement[];
}
