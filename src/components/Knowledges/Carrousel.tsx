import { type ReactElement, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCarouselControls } from '@/hooks/useCarouselControls';
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
  const { canScrollLeft, canScrollRight, handleScroll } =
    useCarouselControls(viewportRef);

  return (
    <CarouselContainer>
      <CarouselButton
        $isVisible={canScrollLeft}
        aria-label={text.knowledge.previous}
        disabled={!canScrollLeft}
        tabIndex={canScrollLeft ? 0 : -1}
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
        $isVisible={canScrollRight}
        aria-label={text.knowledge.next}
        disabled={!canScrollRight}
        tabIndex={canScrollRight ? 0 : -1}
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
