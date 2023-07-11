import { ReactElement } from 'react';
import Title from '../Title';
import Form from './Form';
import { Container } from './styles';

interface FormsProps {
  status: boolean;
}

export function FormContact({ status }: FormsProps): ReactElement {
  return (
    <Container>
      <Title
        title={
          <>
            Vamos trabalhar
            <br />
            juntos ?
          </>
        }
        description="Entre em contato comigo 🤝"
      />

      <Form status={status} />
    </Container>
  );
}
