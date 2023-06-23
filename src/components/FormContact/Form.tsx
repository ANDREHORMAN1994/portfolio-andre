import { FormContainer, Input } from './styles';

function Form() {
  return (
    <FormContainer>
      <Input type="text" placeholder="Nome" required />
      <Input type="email" placeholder="E-mail" required />
      <button type="submit">Enviar</button>
    </FormContainer>
  );
}

export default Form;
