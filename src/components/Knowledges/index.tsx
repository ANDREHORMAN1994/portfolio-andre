import { type ReactNode } from 'react';
import Carousel from 'react-elastic-carousel';
import Title from '../Title';
import KnowledgeItem from './KnowledgeItem';
import { Container } from './styles';
import items from './technologies';
import { Breaks } from './types';

// const CustomCarousel: React.FC<CustomCarouselProps> = ({
//   breakPoints,
//   isRTL = false,
//   children
// }) => (
//   <Carousel breakPoints={breakPoints} isRTL={isRTL}>
//     {children}
//   </Carousel>
// );

const breakPoints: Breaks[] = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 3, itemsToScroll: 3 },
  { width: 768, itemsToShow: 4, itemsToScroll: 4 },
  { width: 1200, itemsToShow: 5, itemsToScroll: 5 }
];

export function Knowledges(): ReactNode {
  return (
    <Container>
      <Title title="Conhecimentos" description="Hard Skills" />
      <section>
        <Carousel breakPoints={breakPoints} isRTL={false}>
          {items.map(({ id, title, icon }) => (
            <KnowledgeItem key={id} title={title} icon={icon} />
          ))}
        </Carousel>
      </section>
    </Container>
  );
}
