import { Banner } from '../../../components/Banner';
import Header from '../../../components/Header';
import { ProjectDetailsContainer } from './style';

function ProjectDetails({ status, setStatus }) {
  return (
    <ProjectDetailsContainer>
      <Header status={status} setStatus={setStatus} />
      <Banner
        title="Projeto X"
        type="Website"
        imgUrl="https://img.freepik.com/vetores-premium/projeto-de-construcao_24877-45619.jpg?w=2000"
      />

      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          placeat temporibus maxime tempora, quo dicta. Voluptate voluptatum
          iste aliquid eos sint ut molestiae nisi eum? Iusto ipsa error sequi
          mollitia.
        </p>
        <button type="button">
          <a href="#">Ver Projeto 👀</a>
        </button>
      </main>
    </ProjectDetailsContainer>
  );
}

export default ProjectDetails;
