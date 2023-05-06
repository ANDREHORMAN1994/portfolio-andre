import Link from 'next/link';
import Title from '../Title';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

export function Projects() {
  return (
    <Container>
      <Title title="Projetos" description="desenvolvidos" />
      <section>
        <ProjectItem
          title="Projeto"
          type="- Website"
          pathId="/"
          imgURL={null}
        />
        <ProjectItem
          title="Projeto"
          type="- Website"
          pathId="/"
          imgURL={null}
        />
        <ProjectItem
          title="Projeto"
          type="- Website"
          pathId="/"
          imgURL={null}
        />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
