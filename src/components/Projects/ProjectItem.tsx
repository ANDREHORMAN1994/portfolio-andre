import { ReactElement } from 'react';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { useLanguage } from '@/contexts/LanguageContext';
import { ProjectContainer } from './styles';

interface Props {
  title: string;
  type: string;
  pathId: string;
  imgURL: string | null;
  icon?: string | null;
}

const IMG =
  'https://img.freepik.com/vetores-premium/projeto-de-construcao_24877-45619.jpg?w=2000';

function ProjectItem({
  title,
  type,
  pathId,
  imgURL,
  icon
}: Props): ReactElement {
  const { text } = useLanguage();

  return (
    <ProjectContainer
      $imgURL={imgURL ?? IMG}
      data-aos="fade-up"
      href={`/projects/${pathId}`}
    >
      <section>
        <div className="overlay" />
        <div className="text">
          {icon ? (
            <h1>
              {title}
              <img src={icon} alt={title} />
            </h1>
          ) : (
            <h1>{title}</h1>
          )}
          <h2>{type}</h2>
        </div>
      </section>
      <span className="project-link">
        {text.projects.viewMore} <AiOutlineRightCircle />
      </span>
    </ProjectContainer>
  );
}

ProjectItem.defaultProps = {
  icon: null
};

export default ProjectItem;
