import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { FaWpforms } from 'react-icons/fa';
import { Container } from './styles';

export function Footer() {
  const handleRedirect = (url: string) => {
    window.open(url);
  };

  const handleScrollTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/ANDREHORMAN1994')}
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect('https://www.linkedin.com/in/andrehorman/')
            }
          />
          <FaWpforms
            onClick={() => handleRedirect('https://resume.io/r/5XOjVWyDz')}
          />
        </section>
      </div>
    </Container>
  );
}
