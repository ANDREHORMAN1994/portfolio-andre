import { ReactElement, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCarouselControls } from '@/hooks/useCarouselControls';
import Title from '../Title';
import ExperienceItem from './ExperienceItem';
import {
  CarouselButton,
  CarouselContainer,
  CarouselTrack,
  CarouselViewport,
  Container
} from './styles';

export function Experiences(): ReactElement {
  const { text } = useLanguage();
  const viewportRef = useRef<HTMLDivElement>(null);
  const { canScrollLeft, canScrollRight, handleScroll } =
    useCarouselControls(viewportRef);

  return (
    <Container id="experience">
      <Title
        title={text.experiences.title}
        description={text.experiences.subtitle}
      />
      <CarouselContainer>
        <CarouselButton
          $isVisible={canScrollLeft}
          aria-label={text.experiences.previous}
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
          <CarouselTrack>
            {text.experiences.items.map(item => (
              <ExperienceItem key={item.year} {...item} />
            ))}
          </CarouselTrack>
        </CarouselViewport>
        <CarouselButton
          $isVisible={canScrollRight}
          aria-label={text.experiences.next}
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
    </Container>
  );
}
