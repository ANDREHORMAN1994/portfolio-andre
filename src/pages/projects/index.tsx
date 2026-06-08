import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import {
  ReactElement,
  useEffect,
  type Dispatch,
  type SetStateAction
} from 'react';
import { ProjectsContainer } from '@/styles/ProjectsStyle';
import Header from '../../components/Header';
import { ProjectCard } from '../../components/ProjectCard';
import { getLocalizedProjects } from '../../utils/data';
import { SITE_OG_IMAGE, SITE_URL } from '../../utils/site';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectsProps {
  status: boolean;
  setStatus: Dispatch<SetStateAction<boolean>>;
}

function Projects({ status, setStatus }: ProjectsProps): ReactElement {
  const { language, text } = useLanguage();
  const projects = getLocalizedProjects(language);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <ProjectsContainer>
      <Head>
        <title>{text.site.projectsTitle}</title>
        <meta name="description" content={text.site.description} />
        <link rel="canonical" href={`${SITE_URL}/projects`} />
        <meta property="og:title" content={text.site.projectsTitle} />
        <meta property="og:description" content={text.site.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/projects`} />
        <meta property="og:image" content={SITE_OG_IMAGE} />
        <meta property="og:image:secure_url" content={SITE_OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={text.site.projectsTitle} />
        <meta name="twitter:description" content={text.site.description} />
        <meta name="twitter:image" content={SITE_OG_IMAGE} />
      </Head>
      <Header status={status} setStatus={setStatus} />
      <main className="container" data-aos="fade-up">
        {projects.map(({ id, title, type, imgUrl, icon }) => (
          <ProjectCard
            key={id}
            id={id}
            title={title}
            type={type}
            imgUrl={imgUrl}
            icon={icon}
          />
        ))}
      </main>
    </ProjectsContainer>
  );
}

export default Projects;
