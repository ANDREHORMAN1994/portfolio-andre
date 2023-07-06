import { ReactNode } from 'react';
import { Container, SpinnerContainer } from './styles';

function Loading(): ReactNode {
  return (
    <Container>
      <SpinnerContainer>
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
      </SpinnerContainer>
    </Container>
  );
}

export default Loading;
