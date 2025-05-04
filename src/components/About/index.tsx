import { ReactElement, useEffect, useState } from 'react';
import { usePicture } from '../../hooks/usePicture';
import Title from '../Title';
import { Container, TextContainer } from './styles';

export function About(): ReactElement {
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
      <section data-aos="fade-up">
        <img
          className={showImg ? 'picture' : ''}
          src={picture}
          alt="Minha imagem do github"
        />
        <TextContainer>
          <p>
            Olá! Meu nome é André, tenho 30 anos e sou desenvolvedor Web.
            Conheci a programação em meados de 2020 e desde então me apaixonei
            pela área de tecnologia. 💚 Após uma grande transição de carreira,
            hoje tenho o prazer de atuar como desenvolvedor Front End, unindo
            criatividade e código para criar experiências digitais de qualidade.
          </p>
          <p>
            Atualmente, estou focado em aprimorar minhas habilidades, com o
            objetivo de obter novas experiências que possam contribuir para meu
            futuro. 🚀
          </p>
          <p>
            Minhas principais stacks são:{' '}
            <span>
              HTML, CSS, JavaScript, Typescript, React, Next, Tailwind CSS,
              Context API, Redux, Node, Express, MongoDB, MySQL e uma pitada de
              Python
            </span>
            .
          </p>
        </TextContainer>
      </section>
    </Container>
  );
}
