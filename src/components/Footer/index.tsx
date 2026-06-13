import { ReactElement } from 'react';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { FaWpforms } from 'react-icons/fa';
import { IoArrowUpCircleOutline } from 'react-icons/io5';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tooltip } from '../Tooltip';
import { Container } from './styles';

export function Footer(): ReactElement {
  const { text } = useLanguage();

  const handleScrollTop = (): void => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Container>
      <div className="container">
        <button
          aria-label={text.footer.backToTop}
          type="button"
          onClick={handleScrollTop}
        >
          <span className="scroll-icon">
            <IoArrowUpCircleOutline aria-hidden="true" />
          </span>
          <span className="scroll-label">{text.footer.backToTop}</span>
        </button>
        <p>© 2026 André Horman</p>
        <section>
          <Tooltip align="start" label={text.footer.github}>
            <a
              href="https://github.com/ANDREHORMAN1994"
              target="_blank"
              rel="noreferrer"
              aria-label={text.footer.github}
            >
              <AiOutlineGithub />
            </a>
          </Tooltip>
          <Tooltip label={text.footer.linkedin}>
            <a
              href="https://www.linkedin.com/in/andrehorman/"
              target="_blank"
              rel="noreferrer"
              aria-label={text.footer.linkedin}
            >
              <AiFillLinkedin />
            </a>
          </Tooltip>
          <Tooltip align="end" label={text.footer.resume}>
            <a
              href="https://resume.io/r/5XOjVWyDz"
              target="_blank"
              rel="noreferrer"
              aria-label={text.footer.resume}
            >
              <FaWpforms />
            </a>
          </Tooltip>
        </section>
      </div>
    </Container>
  );
}
