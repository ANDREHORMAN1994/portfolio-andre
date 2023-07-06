import { ReactNode, type Dispatch, type SetStateAction } from 'react';
import { GiDeskLamp, GiFlexibleLamp } from 'react-icons/gi';
import useSound from 'use-sound';
import NavLink from './NavLink';
import { ButtonIcon, Container } from './styles';

interface HeaderProps {
  status: boolean;
  setStatus: Dispatch<SetStateAction<boolean>>;
}

function Header({ status, setStatus }: HeaderProps): ReactNode {
  const [play] = useSound('/sounds/som-click.mp3');

  const handleClick = (): void => {
    if (play) {
      play();
      setStatus(!status);
    }
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
