import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import { ProjectCard } from '../../components/ProjectCard';
import { ProjectsContainer } from './styles';

const myProjetcs = [
  {
    id: 0,
    title: 'Projeto X',
    type: 'Website',
    imgUrl:
      'https://img.freepik.com/vetores-premium/projeto-de-construcao_24877-45619.jpg?w=2000'
  },
  {
    id: 1,
    title: 'Projeto X',
    type: 'Website',
    imgUrl:
      'https://img.freepik.com/vetores-premium/projeto-de-construcao_24877-45619.jpg?w=2000'
  },
  {
    id: 2,
    title: 'Projeto X',
    type: 'Website',
    imgUrl:
      'https://img.freepik.com/vetores-premium/projeto-de-construcao_24877-45619.jpg?w=2000'
  },
  {
    id: 3,
    title: 'Projeto X',
    type: 'Website',
    imgUrl:
      'https://img.freepik.com/vetores-premium/projeto-de-construcao_24877-45619.jpg?w=2000'
  }
];

function Projects({ status, setStatus }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <Loading />;

  return (
    <ProjectsContainer>
      <Header status={status} setStatus={setStatus} />
      <main className="container">
        {myProjetcs.map(({ id, title, type, imgUrl }) => (
          <ProjectCard key={id} title={title} type={type} imgUrl={imgUrl} />
        ))}
      </main>
    </ProjectsContainer>
  );
}

export default Projects;
