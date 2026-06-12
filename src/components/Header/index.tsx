import {
  ReactElement,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction
} from 'react';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { GiDeskLamp, GiFlexibleLamp } from 'react-icons/gi';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';
import useSound from 'use-sound';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tooltip } from '../Tooltip';
import NavLink from './NavLink';
import {
  Container,
  HeaderContent,
  HeaderIconActions,
  ThemeButton
} from './styles';

interface HeaderProps {
  status: boolean;
  setStatus: Dispatch<SetStateAction<boolean>>;
}

function Header({ status, setStatus }: HeaderProps): ReactElement {
  const [play] = useSound('/sounds/som-click.mp3');
  const { text } = useLanguage();
  const router = useRouter();
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);

  useEffect(() => {
    if (router.pathname !== '/') {
      setIsAboutVisible(false);
      setIsExperienceVisible(false);
      return undefined;
    }

    const aboutSection = document.querySelector('#about');
    const experienceSection = document.querySelector('#experience');

    if (!aboutSection || !experienceSection) return undefined;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.target.id === 'about') {
            setIsAboutVisible(entry.isIntersecting);
          }

          if (entry.target.id === 'experience') {
            setIsExperienceVisible(entry.isIntersecting);
          }
        });
      },
      {
        rootMargin: '-25% 0px -45%',
        threshold: 0
      }
    );

    observer.observe(aboutSection);
    observer.observe(experienceSection);

    return () => {
      observer.disconnect();
    };
  }, [router.pathname]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    play();
    setStatus(!status);
  };

  return (
    <Container>
      <HeaderContent>
        <nav>
          <Tooltip
            label={
              status
                ? text.navigation.enableDarkTheme
                : text.navigation.enableLightTheme
            }
            position="bottom"
          >
            <ThemeButton
              aria-label={
                status
                  ? text.navigation.enableDarkTheme
                  : text.navigation.enableLightTheme
              }
              type="button"
              onClick={e => {
                handleClick(e);
              }}
            >
              {status ? <GiDeskLamp /> : <GiFlexibleLamp />}
            </ThemeButton>
          </Tooltip>
          <NavLink
            path="/"
            title={text.navigation.home}
            active={
              router.pathname === '/' && !isAboutVisible && !isExperienceVisible
            }
          />
          <NavLink
            path="/#about"
            title={text.navigation.about}
            active={isAboutVisible && !isExperienceVisible}
          />
          <NavLink path="/projects" title={text.navigation.projects} includes />
          <NavLink
            path="/#experience"
            title={text.navigation.experience}
            active={isExperienceVisible}
          />
        </nav>
        <HeaderIconActions>
          <Tooltip label={text.footer.github} position="bottom">
            <a
              href="https://github.com/ANDREHORMAN1994"
              target="_blank"
              rel="noreferrer"
              aria-label={text.footer.github}
            >
              <AiOutlineGithub />
            </a>
          </Tooltip>
          <Tooltip label={text.footer.linkedin} position="bottom">
            <a
              href="https://www.linkedin.com/in/andrehorman/"
              target="_blank"
              rel="noreferrer"
              aria-label={text.footer.linkedin}
            >
              <AiFillLinkedin />
            </a>
          </Tooltip>
          <Tooltip align="end" label={text.footer.resume} position="bottom">
            <a
              href="https://resume.io/r/5XOjVWyDz"
              target="_blank"
              rel="noreferrer"
              aria-label={text.footer.resume}
            >
              <IoDocumentTextOutline />
            </a>
          </Tooltip>
        </HeaderIconActions>
      </HeaderContent>
    </Container>
  );
}

export default Header;
