import { type GetServerSideProps } from 'next';
import { AiFillGithub } from 'react-icons/ai';
import Head from 'next/head';
import Link from 'next/link';
import {
  ReactElement,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction
} from 'react';
import { ProjectDetailsContainer } from '@/styles/ProjectDetailsStyle';
import { Banner } from '../../../components/Banner';
import Header from '../../../components/Header';
import Loading from '../../../components/Loading';
import myProjetcs from '../../../utils/data';

interface ProjectInfoProps {
  title: string;
  type: string;
  imgUrl: string;
  description: string;
  link: string;
  techs: string[];
  repo: string;
}

interface ServerSideProps {
  project: string;
}

interface DetailsProps extends ServerSideProps {
  status: boolean;
  setStatus: Dispatch<SetStateAction<boolean>>;
}

function ProjectDetails({
  status,
  setStatus,
  project
}: DetailsProps): ReactElement {
  const [loading, setLoading] = useState(true);
  const [projectInfo, setProjectInfo] = useState<ProjectInfoProps | null>(null);

  useEffect(() => {
    const newInfos = myProjetcs.find(({ title }) => title === project);

    setTimeout(() => {
      if (newInfos != null) {
        setProjectInfo(newInfos);
        setLoading(false);
      }
    }, 2000);
  }, []);

  if (loading || projectInfo == null) return <Loading />;

  const { title, type, imgUrl, description, link, techs, repo } = projectInfo;

  const verifyIndex = (index: number): string => {
    const lastIndexList = techs.length - 1;
    if (index === lastIndexList && index % 2 === 0) {
      return 'li-complete';
    }
    return '';
  };

  return (
    <ProjectDetailsContainer>
      <Head>
        <title>{title} | Meu portfólio</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={imgUrl} />
        <meta property="og:image:secure_url" content={imgUrl} />
        <meta name="twitter:image" content={imgUrl} />
        <meta name="twitter:image:src" content={imgUrl} />
        <meta property="og:description" content={description} />
      </Head>
      <Header status={status} setStatus={setStatus} />
      <Banner title={title} type={type} imgUrl={imgUrl} />

      <main data-aos="fade-up">
        <p>{description}</p>
        <h2>Tecnologias e Bibliotecas Utilizadas 👨‍💻</h2>
        <ul>
          {techs.map((tech, index) => (
            <li className={verifyIndex(index)}>{tech}</li>
          ))}
        </ul>
        <div>
          <button type="button">
            <Link href={link} target="_blank">
              Ver Projeto 👀
            </Link>
          </button>
          <button type="button">
            <Link href={repo} target="_blank">
              <AiFillGithub />
            </Link>
          </button>
        </div>
      </main>
    </ProjectDetailsContainer>
  );
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async ({
  params
}) => {
  if (params == null || typeof params.project !== 'string') {
    return {
      notFound: true
    };
  }

  const { project } = params;
  return {
    props: {
      project
    }
  };
};

export default ProjectDetails;
