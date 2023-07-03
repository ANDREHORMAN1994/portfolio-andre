import { GiDeskLamp, GiFlexibleLamp } from 'react-icons/gi';
import useSound from 'use-sound';
import NavLink from './NavLink';
import { ButtonIcon, Container } from './styles';

function Header({ status, setStatus }) {
  const [play] = useSound('/sounds/som-click.mp3');

  const handleClick = () => {
    setStatus(!status);
    play();
  };

  return (
    <Container>
      <nav>
        <NavLink path="/" title="Home" />
        <NavLink path="/projects" title="Projetos" includes />
        <ButtonIcon status={status} type="button" onClick={handleClick}>
          {status ? <GiDeskLamp /> : <GiFlexibleLamp />}
        </ButtonIcon>
      </nav>
    </Container>
  );
}

export default Header;
