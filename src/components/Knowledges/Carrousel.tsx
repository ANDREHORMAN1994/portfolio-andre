import { type ReactElement, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  CarouselButton,
  CarouselContainer,
  CarouselTrack,
  CarouselViewport
} from './styles';
import { type CustomCarouselProps } from './types';

function Carrousel({ children }: CustomCarouselProps): ReactElement {
  const viewportRef = useRef<HTMLDivElement>(null);
  const { text } = useLanguage();

  const handleScroll = (direction: number): void => {
    viewportRef.current?.scrollBy({
      behavior: 'smooth',
      left: direction * viewportRef.current.clientWidth
    });
  };

  return (
    <CarouselContainer>
      <CarouselButton
        aria-label={text.knowledge.previous}
        type="button"
        onClick={() => {
          handleScroll(-1);
        }}
      >
        ❮
      </CarouselButton>
      <CarouselViewport ref={viewportRef}>
        <CarouselTrack>{children}</CarouselTrack>
      </CarouselViewport>
      <CarouselButton
        aria-label={text.knowledge.next}
        type="button"
        onClick={() => {
          handleScroll(1);
        }}
      >
        ❯
      </CarouselButton>
    </CarouselContainer>
  );
}

export default Carrousel;
