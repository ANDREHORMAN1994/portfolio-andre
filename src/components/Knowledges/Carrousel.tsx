import React from 'react';
import ReactElasticCarousel from 'react-elastic-carousel';
import { CustomCarouselProps } from './types';

const Carrousel: React.FC<CustomCarouselProps> = ({
  breakPoints,
  isRTL,
  children
}) => {
  const carouselProps: CustomCarouselProps = {
    breakPoints,
    isRTL,
    children
  };

  return <ReactElasticCarousel {...carouselProps} />;
};

export default Carrousel;
