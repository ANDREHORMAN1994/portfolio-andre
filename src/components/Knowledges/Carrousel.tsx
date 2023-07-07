import React from 'react';
import ReactElasticCarousel from 'react-elastic-carousel';
import { CustomCarouselProps } from './types';

const Carrousel: React.FC<CustomCarouselProps> = ({
  breakPoints,
  isRTL,
  children,
  showArrows,
  pagination
}) => {
  const carouselProps: CustomCarouselProps = {
    breakPoints,
    isRTL,
    showArrows,
    pagination,
    children
  };

  return <ReactElasticCarousel {...carouselProps} />;
};

export default Carrousel;
