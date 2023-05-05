import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <nav>
        <NavLink path="/" title="Home" />
        <NavLink path="/projetos" title="Projetos" />
      </nav>
    </Container>
  );
}

export default Header;
