import { type ReactElement } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Title from '../Title';
import Carrousel from './Carrousel';
import KnowledgeItem from './KnowledgeItem';
import { Container } from './styles';
import items from './technologies';

export function Knowledges(): ReactElement {
  const { text } = useLanguage();

  return (
    <Container>
      <Title
        title={text.knowledge.title}
        description={text.knowledge.subtitle}
      />
      <section>
        <Carrousel>
          {items.map(({ id, title, icon }) => (
            <KnowledgeItem key={id} title={title} icon={icon} />
          ))}
        </Carrousel>
      </section>
    </Container>
  );
}
