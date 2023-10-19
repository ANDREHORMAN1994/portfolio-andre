import { ReactElement } from 'react';
import { Container } from './styles';

interface BannerProps {
  title: string;
  type: string;
  imgUrl: string;
  icon?: string | null;
}

export function Banner({
  title,
  icon,
  type,
  imgUrl
}: BannerProps): ReactElement {
  return (
    <Container imgUrl={imgUrl}>
      <div className="overlay" />
      <section>
        {icon ? (
          <h1>
            {title}
            <img src={icon} alt={title} />
          </h1>
        ) : (
          <h1>{title}</h1>
        )}
        <h2>{type}</h2>
      </section>
    </Container>
  );
}

Banner.defaultProps = {
  icon: null
};
