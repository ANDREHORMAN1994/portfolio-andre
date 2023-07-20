import Link from 'next/link';
import { ReactElement } from 'react';
import { Container } from './styles';

interface ProjectCardProps {
  id: number;
  title: string;
  type: string;
  imgUrl: string;
}

export function ProjectCard({
  id,
  title,
  type,
  imgUrl
}: ProjectCardProps): ReactElement {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/projects/${id.toString()}`}>
        <div className="overlay" />
        <section>
          <h1>{title}</h1>
          <h2>{type}</h2>
        </section>
      </Link>
    </Container>
  );
}
