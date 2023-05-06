import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjectContainer } from './styles';

interface Props {
  title: string;
  type: string;
  path: string;
  imgURL: string;
}

const IMG =
  'https://img.freepik.com/vetores-premium/projeto-de-construcao_24877-45619.jpg?w=2000';

function ProjectItem({ title, type, path, imgURL }: Props) {
  return (
    <ProjectContainer imgURL={imgURL || IMG}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>{title}</h1>
          <h2>{type}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={path}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjectContainer>
  );
}

export default ProjectItem;
