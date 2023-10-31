import Link from 'next/link';
import { ReactElement } from 'react';
import Title from '../Title';
import ProjectItem from './ProjectItem';
import { Container } from './styles';
import myProjetcs from '../../utils/data';

export function Projects(): ReactElement {
  return (
    <Container>
      <Title title="Projetos" description="desenvolvidos" />
      <section>
        {myProjetcs.slice(0, 3).map(project => (
          <ProjectItem
            key={project.id}
            title={project.title}
            type={project.type}
            pathId={project.id.toString()}
            imgURL={project.imgUrl}
            icon={project.icon}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projects">Ver todos os projetos</Link>
      </button>
    </Container>
  );
}
