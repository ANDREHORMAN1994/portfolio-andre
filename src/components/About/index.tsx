import { useEffect, useState } from 'react';
import { usePicture } from '../../hooks/usePicture';
import Title from '../Title';
import { Container, TextContainer } from './styles';

export function About() {
  const [showImg, setShowImg] = useState(false);
  const picture = usePicture();

  useEffect(() => {
    if (picture.length) {
      setShowImg(true);
    }
  }, [picture]);

  return (
    <Container>
      <Title title="Sobre mim" description="Resumo" />
      <section>
        <img
          className={showImg ? 'picture' : ''}
          src={picture}
          alt="Minha imagem do github"
        />
        <TextContainer>
          <p>
            Meu nome é André Horman, nascido em Itabaiana - PB e atualmente
            morando em João Pessoa - PB. Meu interesse pela programação surgiu
            em meados de 2020, quando iniciei a Trybe. Foi amor à primeira
            vista! Percebi que poderia ter uma nova perspectiva de futuro ao
            explorar as tecnologias e possibilidades oferecidas pela
            programação. 💚
          </p>
          <p>
            Atualmente, estou focado em aprimorar minhas habilidades como
            desenvolvedor Full Stack, com o objetivo de obter novas experiências
            que possam contribuir para meu futuro. 🚀
          </p>
          <p>
            Minhas principais stacks são:{' '}
            <span>
              HTML, CSS, JavaScript, Jest, React, Redux, Context Api, Node,
              Express, MongoDB, MySQL e uma pitada de Python
            </span>
            .
          </p>
        </TextContainer>
      </section>
    </Container>
  );
}
