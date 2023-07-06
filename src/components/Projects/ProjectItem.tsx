import Link from 'next/link';
import { ReactNode } from 'react';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjectContainer } from './styles';

interface Props {
  title: string;
  type: string;
  pathId: string;
  imgURL: string | null;
}

const IMG =
  'https://img.freepik.com/vetores-premium/projeto-de-construcao_24877-45619.jpg?w=2000';

function ProjectItem({ title, type, pathId, imgURL }: Props): ReactNode {
  return (
    <ProjectContainer imgURL={imgURL ?? IMG} data-aos="fade-up">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>{title}</h1>
          <h2>{type}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={`/projects/${pathId}`}>
          Ver mais <AiOutlineRightCircle />
        </Link>
      </button>
    </ProjectContainer>
  );
}

export default ProjectItem;
