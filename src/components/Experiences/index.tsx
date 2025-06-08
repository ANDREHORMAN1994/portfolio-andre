import { ReactElement } from 'react';
import Title from '../Title';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

export function Experiences(): ReactElement {
  return (
    <Container>
      <Title title="05 Anos" description="de experiência" />
      <section>
        <ExperienceItem
          year="2024 - 2025"
          status="Desenvolvedor Front-End"
          description="Meu primeiro projeto internacional foi na Opsin Finance, onde atuei como Desenvolvedor Front-End. Contribuí ativamente para o desenvolvimento, evolução e aprimoramento da interface desktop e mobile de uma aplicação focada em análises de blockchain e criptomoedas. Minha atuação envolveu desde a implementação de novas funcionalidades até a otimização de performance e usabilidade, garantindo uma experiência intuitiva e eficiente para os usuários."
          width="60%"
        />
        <ExperienceItem
          year="2023 - 2024"
          status="Desenvolvedor Freelance"
          description="Durante esse período, trabalhei em projetos como freelancer para algumas empresas (Starta Solutions, Codante), desenvolvendo soluções personalizadas para clientes e aprimorando minhas habilidades em desenvolvimento web."
          width="40%"
        />
        <ExperienceItem
          year="2021 - 2023"
          status="Instrutor de Tecnologia"
          description="Pessoa instrutora Front-End na Trybe. Participação direta na formação das pessoas estudantes, por meio da produção, curadoria e revisão do conteúdo, bem como dando aulas, monitorias, instruindo e avaliando projetos."
          width="60%"
        />
        <ExperienceItem
          year="2020 - 2021"
          status="Estudante da Trybe"
          description="Escola de tecnologia focada em Desenvolvimento Web Full Stack com as melhores tecnologias do mercado."
          width="40%"
        />
      </section>
    </Container>
  );
}
