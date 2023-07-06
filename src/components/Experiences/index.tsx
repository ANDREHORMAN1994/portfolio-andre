import { ReactNode } from 'react';
import Title from '../Title';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

export function Experiences(): ReactNode {
  return (
    <Container>
      <Title title="03 Anos" description="de experiência" />
      <section>
        <ExperienceItem
          year="2020 - 2021"
          status="Estudante da Trybe"
          description="Escola de tecnologia focada em Desenvolvimento Web Full Stack com as melhores tecnologias do mercado."
        />
        <ExperienceItem
          year="2021 - 2023"
          status="Instrutor de Tecnologia"
          description="Pessoa instrutora Front-End na Trybe. Participação direta na formação das pessoas estudantes, por meio da produção, curadoria e revisão do conteúdo, bem como dando aulas, monitorias, instruindo e avaliando projetos."
        />
      </section>
    </Container>
  );
}
