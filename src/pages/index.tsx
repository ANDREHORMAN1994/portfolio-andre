import { About } from '../components/About';
import { Experiences } from '../components/Experiences';
import { FormContact } from '../components/FormContact';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import { Knowledges } from '../components/Knowledges';
import { Projects } from '../components/Projects';
import { HomeContainer } from '../styles/HomeStyle';

function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <About />
        <Experiences />
        <Projects />
        <Knowledges />
        <FormContact />
      </main>
    </HomeContainer>
  );
}

export default Home;
