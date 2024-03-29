import Aos from 'aos';
import 'aos/dist/aos.css';
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
// import sdk from '@stackblitz/sdk';
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
  icon?: string | null;
}

interface ServerSideProps {
  id: string;
}

interface DetailsProps extends ServerSideProps {
  status: boolean;
  setStatus: Dispatch<SetStateAction<boolean>>;
}

function ProjectDetails({ status, setStatus, id }: DetailsProps): ReactElement {
  const [loading, setLoading] = useState(true);
  const [projectInfo, setProjectInfo] = useState<ProjectInfoProps | null>(null);

  // const openProject = (): void => {
  //   const url = 'stackblitz-starters-duehlx';

  //   sdk.embedProjectId('embed', url, {
  //     forceEmbedLayout: true,
  //     openFile: 'src/app.js',
  //     view: 'editor',
  //     hideExplorer: true
  //   });
  // };

  // useEffect(() => {
  //   if (!loading) {
  //     openProject();
  //   }
  // }, [loading]);

  useEffect(() => {
    Aos.init({ duration: 1500 });
    const newInfos = myProjetcs.find(
      project => Number(project.id) === Number(id)
    );

    setTimeout(() => {
      if (newInfos != null) {
        setProjectInfo(newInfos);
        setLoading(false);
      }
    }, 2000);
  }, []);

  if (loading || projectInfo == null) return <Loading />;

  const { title, type, imgUrl, description, link, techs, repo, icon } =
    projectInfo;

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
      <Banner title={title} icon={icon} type={type} imgUrl={imgUrl} />

      <main data-aos="fade-up">
        <p>{description}</p>
        <h2 data-aos="fade-up">Tecnologias Utilizadas 👨‍💻</h2>
        <ul data-aos="fade-up">
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
        {/* {!loading && (
          <div id="embed">
            <p>Embed will go here</p>
          </div>
        )} */}
      </main>
    </ProjectDetailsContainer>
  );
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async ({
  params
}) => {
  if (params == null || typeof params.id !== 'string') {
    return {
      notFound: true
    };
  }

  const { id } = params;
  return {
    props: {
      id
    }
  };
};

export default ProjectDetails;
