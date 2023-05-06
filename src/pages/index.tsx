import { About } from '../components/About';
import { Experiences } from '../components/Experiences';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
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
      </main>
    </HomeContainer>
  );
}

export default Home;
