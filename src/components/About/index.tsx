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
      <section data-aos="fade-up">
        <img
          className={showImg ? 'picture' : ''}
          src={picture}
          alt="Minha imagem do github"
        />
        <TextContainer>
          <p>
            Olá! Meu nome é André, tenho 28 anos e sou formado em
            Desenvolvimento Web Full Stack pela escola Trybe. Iniciei meus
            estudos em meados de 2020 e desde então me apaixonei pela área. Tive
            o prazer de atuar como instrutor de tecnologia Front End durante
            dois anos, auxiliando e educando estudantes no campo do
            desenvolvimento web. 💚
          </p>
          <p>
            Atualmente, estou focado em aprimorar minhas habilidades como
            desenvolvedor Full Stack, com o objetivo de obter novas experiências
            que possam contribuir para meu futuro. 🚀
          </p>
          <p>
            Minhas principais stacks são:{' '}
            <span>
              HTML, CSS, JavaScript, Jest, React, Next, Redux, Context Api,
              Node, Express, MongoDB, MySQL e uma pitada de Python
            </span>
            .
          </p>
        </TextContainer>
      </section>
    </Container>
  );
}
