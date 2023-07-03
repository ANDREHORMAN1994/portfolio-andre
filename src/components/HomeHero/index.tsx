import Code from './Code';
import {
  Container,
  DynamicContainer,
  InfoContainer,
  TextContainer
} from './styles';

function HomeHero() {
  return (
    <Container>
      <img className="picture" src="/images/avatar.png" alt="Meu Avatar" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <DynamicContainer>
            <div className="static">Eu sou</div>
            <ul className="dynamic">
              <li>
                <span>o André 👋</span>
              </li>
              <li>
                <span>Dev Front-End</span>
              </li>
              <li>
                <span>Dev Back-End</span>
              </li>
            </ul>
          </DynamicContainer>
          {/* <h2>Me chamo André</h2> */}
        </TextContainer>
        <InfoContainer>
          <Code
            text="Infos"
            showComments
            size="24"
            infos={[
              ['name', '"André"'],
              ['lastName', '"Horman"'],
              ['age', 28],
              ['vocation', '"Dev Full-Stack"']
            ]}
          />
          <Code
            text="Contacts"
            size="31.5"
            infos={[
              ['cell', '"(83) 99363-8760"'],
              ['email', '"andre.horman1994@hotmail.com"'],
              ['linkedin', '"www.linkedin.com/in/andrehorman/"'],
              ['github', '"https://github.com/ANDREHORMAN1994"'],
              ['curriculum', '"https://resume.io/r/5XOjVWyDz"']
            ]}
          />
        </InfoContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
