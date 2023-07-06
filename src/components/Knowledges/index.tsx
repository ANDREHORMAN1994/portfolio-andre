import { type ReactElement } from 'react';
import Title from '../Title';
import Carrousel from './Carrousel';
import KnowledgeItem from './KnowledgeItem';
import { Container } from './styles';
import items from './technologies';
import { type Breaks } from './types';

const breakPoints: Breaks[] = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 3, itemsToScroll: 3 },
  { width: 768, itemsToShow: 4, itemsToScroll: 4 },
  { width: 1200, itemsToShow: 5, itemsToScroll: 5 }
];

export function Knowledges(): ReactElement {
  return (
    <Container>
      <Title title="Conhecimentos" description="Hard Skills" />
      <section>
        <Carrousel breakPoints={breakPoints} isRTL={false}>
          {items.map(({ id, title, icon }) => (
            <KnowledgeItem key={id} title={title} icon={icon} />
          ))}
        </Carrousel>
      </section>
    </Container>
  );
}
