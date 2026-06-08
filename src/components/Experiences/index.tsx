import { ReactElement } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Title from '../Title';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

export function Experiences(): ReactElement {
  const { text } = useLanguage();

  return (
    <Container id="experience">
      <Title
        title={text.experiences.title}
        description={text.experiences.subtitle}
      />
      <section>
        {text.experiences.items.map(item => (
          <ExperienceItem key={item.year} {...item} />
        ))}
      </section>
    </Container>
  );
}
