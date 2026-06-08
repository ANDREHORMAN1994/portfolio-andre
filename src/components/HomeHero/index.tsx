import { ReactElement, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useLanguage } from '@/contexts/LanguageContext';
import Code from './Code';
import {
  Container,
  DynamicContainer,
  InfoCarouselButton,
  InfoCarouselControl,
  InfoCarouselSlide,
  InfoCarouselTrack,
  InfoCarouselViewport,
  InfoContainer,
  TextContainer
} from './styles';

function HomeHero(): ReactElement {
  const { text } = useLanguage();
  const [showContacts, setShowContacts] = useState(false);

  return (
    <Container>
      <div className="pictures-container">
        <img
          className="picture"
          src="/images/avatar.png"
          alt={text.hero.avatarAlt}
        />
        <img
          className="picture"
          src="/images/react-logo.png"
          alt={text.hero.reactLogoAlt}
        />
      </div>
      <div data-aos="fade-up">
        <TextContainer>
          <h1>{text.hero.hello}</h1>
          <DynamicContainer>
            <div className="static">{text.hero.iAm}</div>
            <ul className="dynamic">
              <li>
                <span>{text.hero.andre}</span>
              </li>
              <li>
                <span>{text.hero.frontEnd}</span>
              </li>
              <li>
                <span>{text.hero.backEnd}</span>
              </li>
            </ul>
          </DynamicContainer>
          {/* <h2>Me chamo André</h2> */}
        </TextContainer>
        <InfoContainer>
          <InfoCarouselViewport>
            <InfoCarouselTrack $showContacts={showContacts}>
              <InfoCarouselSlide
                $active={!showContacts}
                aria-hidden={showContacts}
              >
                <Code
                  text="Infos"
                  showComments
                  comment={text.hero.introduction}
                  size="31.5"
                  infos={[
                    ['name', '"André Horman"'],
                    ['age', 30],
                    ['role', '"Full-Stack Developer"'],
                    ['hobbies', '["Games 🎮", "Movies 🎬", "Animes 🖖"]']
                  ]}
                />
              </InfoCarouselSlide>
              <InfoCarouselSlide
                $active={showContacts}
                aria-hidden={!showContacts}
              >
                <Code
                  text="Contacts"
                  showComments
                  comment={text.hero.introduction}
                  size="31.5"
                  infos={[
                    ['cell', '"(83) 99363-8760"'],
                    ['email', '"andre.horman1994@hotmail.com"'],
                    ['linkedin', '"linkedin.com/in/andrehorman"'],
                    ['github', '"github.com/ANDREHORMAN1994"'],
                    ['curriculum', '"resume.io/r/5XOjVWyDz"']
                  ]}
                />
              </InfoCarouselSlide>
            </InfoCarouselTrack>
          </InfoCarouselViewport>
          <InfoCarouselControl $showContacts={showContacts}>
            <InfoCarouselButton
              aria-controls="hero-info-carousel"
              aria-label={
                showContacts ? text.hero.showInfos : text.hero.showContacts
              }
              type="button"
              onClick={() => {
                setShowContacts(currentValue => !currentValue);
              }}
            >
              {showContacts ? <MdChevronLeft /> : <MdChevronRight />}
            </InfoCarouselButton>
          </InfoCarouselControl>
        </InfoContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
