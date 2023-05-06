import { Experiences } from '../components/Experiences';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import { HomeContainer } from '../styles/HomeStyle';

function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experiences />
      </main>
    </HomeContainer>
  );
}

export default Home;
