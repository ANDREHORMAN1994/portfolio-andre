import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import {
  ReactElement,
  useEffect,
  useState,
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
import Loading from '../components/Loading';
import { Projects } from '../components/Projects';
import { HomeContainer } from '../styles/HomeStyle';

interface HomeProps {
  status: boolean;
  setStatus: Dispatch<SetStateAction<boolean>>;
}

function Home({ status, setStatus }: HomeProps): ReactElement {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1500 });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Loading />;

  return (
    <HomeContainer>
      <Head>
        <title>Home | Meu portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Web Full Stack e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/images/ogimage.jpg" />
        <meta property="og:image:secure_url" content="/images/ogimage.jpg" />
        <meta name="twitter:image" content="/images/ogimage.jpg" />
        <meta name="twitter:image:src" content="/images/ogimage.jpg" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Web Full Stack e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>
      <Header status={status} setStatus={setStatus} />
      <main className="container">
        <HomeHero />
        <About />
        <Experiences />
        <Projects />
        <Knowledges />
        <FormContact status={status} />
      </main>
      <Footer />
    </HomeContainer>
  );
}

export default Home;
