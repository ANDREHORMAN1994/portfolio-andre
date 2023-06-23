import Title from '../Title';
import Form from './Form';
import { Container } from './styles';

export function FormContact() {
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

      <Form />
    </Container>
  );
}
