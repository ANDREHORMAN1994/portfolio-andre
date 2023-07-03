import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavItemContainer } from './styles';

interface Props {
  title: string;
  path: string;
  includes?: boolean;
}

function NavLink({ title, path, includes = false }: Props) {
  const router = useRouter();

  const verifyIsActive = () => {
    if (includes) return router.pathname.includes(path);
    return path === router.pathname;
  };

  const isActive = verifyIsActive();

  return (
    <NavItemContainer isActive={isActive}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </NavItemContainer>
  );
}

NavLink.defaultProps = {
  includes: false
};

export default NavLink;
