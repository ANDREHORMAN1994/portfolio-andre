import Link from 'next/link';
import { ReactNode } from 'react';
import { Container } from './styles';

interface ProjectCardProps {
  title: string;
  type: string;
  imgUrl: string;
}

export function ProjectCard({
  title,
  type,
  imgUrl
}: ProjectCardProps): ReactNode {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/projects/${title}`}>
        <div className="overlay" />
        <section>
          <h1>{title}</h1>
          <h2>{type}</h2>
        </section>
      </Link>
    </Container>
  );
}
