import { ReactElement } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePicture } from '../../hooks/usePicture';
import Title from '../Title';
import { Container, TextContainer } from './styles';

export function About(): ReactElement {
  const picture = usePicture();
  const { text } = useLanguage();

  return (
    <Container id="about">
      <Title title={text.about.title} description={text.about.subtitle} />
      <section data-aos="fade-up">
        {picture && (
          <img className="picture" src={picture} alt={text.about.pictureAlt} />
        )}
        <TextContainer>
          <p>{text.about.introduction}</p>
          <p>{text.about.collaboration}</p>
          <p>
            {text.about.stackPrefix}{' '}
            <span>
              HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS,
              Jest, Cypress, Playwright, Redux Toolkit, Node.js, Express,
              NestJS, APIs REST, MongoDB, MySQL, PostgreSQL, Git, Docker e uma
              pitada de AWS
            </span>
            .
          </p>
        </TextContainer>
      </section>
    </Container>
  );
}
