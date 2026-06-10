import { ReactElement, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
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

  const handleScroll = (direction: number): void => {
    viewportRef.current?.scrollBy({
      behavior: 'smooth',
      left: direction * viewportRef.current.clientWidth
    });
  };

  return (
    <Container id="experience">
      <Title
        title={text.experiences.title}
        description={text.experiences.subtitle}
      />
      <CarouselContainer>
        <CarouselButton
          aria-label={text.experiences.previous}
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
          aria-label={text.experiences.next}
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
