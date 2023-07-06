import React from 'react';
import ReactElasticCarousel from 'react-elastic-carousel';
import { type CustomCarouselProps } from './types';

const Carrousel: React.FC<CustomCarouselProps> = ({
  breakPoints,
  isRTL,
  children
}) => (
  <ReactElasticCarousel breakPoints={breakPoints} isRTL={isRTL}>
    {children}
  </ReactElasticCarousel>
);

export default Carrousel;
