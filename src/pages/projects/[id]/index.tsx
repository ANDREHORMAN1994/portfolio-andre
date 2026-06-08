import Aos from 'aos';
import 'aos/dist/aos.css';
import { type GetServerSideProps } from 'next';
import { AiFillGithub } from 'react-icons/ai';
import Head from 'next/head';
import Link from 'next/link';
import {
  ReactElement,
  useEffect,
  type Dispatch,
  type SetStateAction
} from 'react';
import { ProjectDetailsContainer } from '@/styles/ProjectDetailsStyle';
import { Banner } from '../../../components/Banner';
import Header from '../../../components/Header';
import { Tooltip } from '../../../components/Tooltip';
import myProjetcs, {
  getLocalizedProject,
  type Project
} from '../../../utils/data';
import { SITE_URL } from '../../../utils/site';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServerSideProps {
  projectInfo: Project;
}

interface DetailsProps extends ServerSideProps {
  status: boolean;
  setStatus: Dispatch<SetStateAction<boolean>>;
}

function ProjectDetails({
  status,
  setStatus,
  projectInfo
}: DetailsProps): ReactElement {
  const { language, text } = useLanguage();

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const { id, title, type, imgUrl, description, link, techs, repo, icon } =
    getLocalizedProject(projectInfo, language);
  const socialImage = `${SITE_URL}${imgUrl}`;
  const projectUrl = `${SITE_URL}/projects/${id.toString()}`;

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
        <title>{`${title} | André Horman`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={projectUrl} />
        <meta property="og:title" content={`${title} | André Horman`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={projectUrl} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:secure_url" content={socialImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | André Horman`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialImage} />
      </Head>
      <Header status={status} setStatus={setStatus} />
      <Banner title={title} icon={icon} type={type} imgUrl={imgUrl} />

      <main data-aos="fade-up">
        <p>{description}</p>
        <h2 data-aos="fade-up">{text.projects.technologies}</h2>
        <ul data-aos="fade-up">
          {techs.map((tech, index) => (
            <li key={tech} className={verifyIndex(index)}>
              {tech}
            </li>
          ))}
        </ul>
        <div>
          <Link href={link} target="_blank" rel="noreferrer">
            {text.projects.viewProject}
          </Link>
          <Tooltip label={text.projects.sourceCode(title)}>
            <Link
              href={repo}
              target="_blank"
              rel="noreferrer"
              aria-label={text.projects.sourceCode(title)}
            >
              <AiFillGithub />
            </Link>
          </Tooltip>
        </div>
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

  const projectId = Number(params.id);
  const projectInfo = myProjetcs.find(project => project.id === projectId);

  if (!Number.isInteger(projectId) || projectInfo == null) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      projectInfo
    }
  };
};

export default ProjectDetails;
