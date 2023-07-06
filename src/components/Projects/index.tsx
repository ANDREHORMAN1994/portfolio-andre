import Link from 'next/link';
import { ReactElement } from 'react';
import Title from '../Title';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

export function Projects(): ReactElement {
  return (
    <Container>
      <Title title="Projetos" description="desenvolvidos" />
      <section>
        <ProjectItem title="Projeto" type="- Website" pathId="" imgURL={null} />
        <ProjectItem title="Projeto" type="- Website" pathId="" imgURL={null} />
        <ProjectItem title="Projeto" type="- Website" pathId="" imgURL={null} />
      </section>
      <button type="button">
        <Link href="/projects">Ver todos os projetos</Link>
      </button>
    </Container>
  );
}
