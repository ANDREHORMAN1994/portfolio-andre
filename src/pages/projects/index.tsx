import Head from 'next/head';
import {
  ReactElement,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction
} from 'react';
import { ProjectsContainer } from '@/styles/ProjectsStyle';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import { ProjectCard } from '../../components/ProjectCard';
import myProjetcs from '../../utils/data';

interface ProjectsProps {
  status: boolean;
  setStatus: Dispatch<SetStateAction<boolean>>;
}

function Projects({ status, setStatus }: ProjectsProps): ReactElement {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Loading />;

  return (
    <ProjectsContainer>
      <Head>
        <title>Projetos | Meu portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Web Full Stack e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/images/ogimage.jpg" />
        <meta property="og:image:secure_url" content="/images/ogimage.jpg" />
        <meta name="twitter:image" content="/images/ogimage.jpg" />
        <meta name="twitter:image:src" content="/images/ogimage.jpg" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Web Full Stack e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>
      <Header status={status} setStatus={setStatus} />
      <main className="container" data-aos="fade-up">
        {myProjetcs.map(({ id, title, type, imgUrl }) => (
          <ProjectCard key={id} title={title} type={type} imgUrl={imgUrl} />
        ))}
      </main>
    </ProjectsContainer>
  );
}

export default Projects;
