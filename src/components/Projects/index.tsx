import Link from 'next/link';
import { ReactElement } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Title from '../Title';
import ProjectItem from './ProjectItem';
import { Container } from './styles';
import { getLocalizedProjects } from '../../utils/data';

export function Projects(): ReactElement {
  const { language, text } = useLanguage();
  const projects = getLocalizedProjects(language);

  return (
    <Container>
      <Title title={text.projects.title} description={text.projects.subtitle} />
      <section>
        {projects.slice(0, 3).map(project => (
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
      <Link className="all-projects" href="/projects">
        {text.projects.viewAll}
      </Link>
    </Container>
  );
}
