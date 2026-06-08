import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import {
  ReactElement,
  useEffect,
  type Dispatch,
  type SetStateAction
} from 'react';
import { About } from '../components/About';
import { Experiences } from '../components/Experiences';
import { Footer } from '../components/Footer';
import { FormContact } from '../components/FormContact';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import { Knowledges } from '../components/Knowledges';
import { Projects } from '../components/Projects';
import { HomeContainer } from '../styles/HomeStyle';
import { SITE_OG_IMAGE, SITE_URL } from '../utils/site';
import { useLanguage } from '@/contexts/LanguageContext';

interface HomeProps {
  status: boolean;
  setStatus: Dispatch<SetStateAction<boolean>>;
}

function Home({ status, setStatus }: HomeProps): ReactElement {
  const { text } = useLanguage();

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>{text.site.homeTitle}</title>
        <meta name="description" content={text.site.description} />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:title" content={text.site.homeTitle} />
        <meta property="og:description" content={text.site.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={SITE_OG_IMAGE} />
        <meta property="og:image:secure_url" content={SITE_OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={text.site.homeTitle} />
        <meta name="twitter:description" content={text.site.description} />
        <meta name="twitter:image" content={SITE_OG_IMAGE} />
      </Head>
      <Header status={status} setStatus={setStatus} />
      <main className="container">
        <HomeHero />
        <About />
        <Projects />
        <Experiences />
        <Knowledges />
        <FormContact status={status} />
      </main>
      <Footer />
    </HomeContainer>
  );
}

export default Home;
