import Carousel from 'react-elastic-carousel';
import Title from '../Title';
import KnowledgeItem from './KnowledgeItem';
import { Container } from './styles';
import items from './technologies';

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 3, itemsToScroll: 3 },
  { width: 768, itemsToShow: 4, itemsToScroll: 4 },
  { width: 1200, itemsToShow: 5, itemsToScroll: 5 }
];

export function Knowledges() {
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
