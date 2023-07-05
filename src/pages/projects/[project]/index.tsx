import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Banner } from '../../../components/Banner';
import Header from '../../../components/Header';
import Loading from '../../../components/Loading';
import myProjetcs from '../../../utils/data';
import { ProjectDetailsContainer } from './style';

interface ProjectInfoProps {
  title: string;
  type: string;
  imgUrl: string;
  description: string;
}

function ProjectDetails({ status, setStatus, project }) {
  const [loading, setLoading] = useState(true);
  const [projectInfo, setProjectInfo] = useState<ProjectInfoProps>(null);

  useEffect(() => {
    const newInfos = myProjetcs.find(({ title }) => title === project);

    setTimeout(() => {
      if (newInfos) {
        setProjectInfo(newInfos);
        setLoading(false);
      }
    }, 2000);
  }, []);

  if (loading) return <Loading />;

  const { title, type, imgUrl, description } = projectInfo;

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
        <button type="button">
          <a href="#">Ver Projeto 👀</a>
        </button>
      </main>
    </ProjectDetailsContainer>
  );
}

export async function getServerSideProps({ params: { project } }) {
  return {
    props: {
      project
    }
  };
}

export default ProjectDetails;
