import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { NavItemContainer } from './styles';

interface Props {
  title: string;
  path: string;
  active?: boolean;
  includes?: boolean;
}

function NavLink({
  title,
  path,
  active,
  includes = false
}: Props): ReactElement {
  const router = useRouter();

  const verifyIsActive = (): boolean => {
    if (includes) return router.pathname.includes(path);
    return path === router.asPath;
  };

  const isActive = active ?? verifyIsActive();

  return (
    <NavItemContainer $isActive={isActive}>
      <Link aria-current={isActive ? 'page' : undefined} href={path}>
        {title}
      </Link>
    </NavItemContainer>
  );
}

NavLink.defaultProps = {
  active: undefined,
  includes: false
};

export default NavLink;
