import { ReactNode } from 'react';

import { Container } from './styles';

interface TitleProps {
  title: string | ReactNode;
  description?: string | ReactNode;
}

function Title({ title, description }: TitleProps) {
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
