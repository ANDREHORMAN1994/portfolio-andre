import { ReactElement } from 'react';

import { Container } from './styles';

interface TitleProps {
  title: string | ReactElement;
  description?: string | ReactElement;
}

function Title({ title, description }: TitleProps): ReactElement {
  return (
    <Container data-aos="fade-right">
      <h1>{title}</h1>
      {description && <h2>{description}</h2>}
    </Container>
  );
}

Title.defaultProps = {
  description: ''
};

export default Title;
