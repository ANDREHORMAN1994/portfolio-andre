import Link from 'next/link';
import { ReactElement } from 'react';
import { Container } from './styles';

interface ProjectCardProps {
  id: number;
  title: string;
  type: string;
  imgUrl: string;
  icon?: string | null;
}

export function ProjectCard({
  id,
  title,
  type,
  imgUrl,
  icon
}: ProjectCardProps): ReactElement {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/projects/${id.toString()}`}>
        <div className="overlay" />
        <section>
          {icon ? (
            <h1>
              {title}
              <img src={icon} alt={title} />
            </h1>
          ) : (
            <h1>{title}</h1>
          )}
          <h2>{type}</h2>
        </section>
      </Link>
    </Container>
  );
}

ProjectCard.defaultProps = {
  icon: null
};
