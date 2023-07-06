import { ReactElement, type Dispatch, type SetStateAction } from 'react';
import { GiDeskLamp, GiFlexibleLamp } from 'react-icons/gi';
import useSound from 'use-sound';
import NavLink from './NavLink';
import { ButtonIcon, Container } from './styles';

interface HeaderProps {
  status: boolean;
  setStatus: Dispatch<SetStateAction<boolean>>;
}

function Header({ status, setStatus }: HeaderProps): ReactElement {
  const [play] = useSound('/sounds/som-click.mp3');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    play();
    setStatus(!status);
  };

  return (
    <Container>
      <nav>
        <NavLink path="/" title="Home" />
        <NavLink path="/projects" title="Projetos" includes />
        <ButtonIcon
          status={status}
          type="button"
          onClick={e => {
            handleClick(e);
          }}
        >
          {status ? <GiDeskLamp /> : <GiFlexibleLamp />}
        </ButtonIcon>
      </nav>
    </Container>
  );
}

export default Header;
