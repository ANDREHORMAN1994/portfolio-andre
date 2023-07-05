import { useEffect, useState } from 'react';
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

function Home({ status, setStatus }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <Loading />;

  return (
    <HomeContainer>
      <Header status={status} setStatus={setStatus} />
      <main className="container">
        <HomeHero />
        <About />
        <Experiences />
        <Projects />
        <Knowledges />
        <FormContact />
      </main>
      <Footer />
    </HomeContainer>
  );
}

export default Home;
