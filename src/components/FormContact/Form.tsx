import { FormContainer, Input, TextArea } from './styles';

function Form() {
  return (
    <FormContainer>
      <Input type="text" placeholder="Nome" required />
      <Input type="email" placeholder="E-mail" required />
      <TextArea placeholder="Mensagem" required />
      <button type="submit" disabled>
        Enviar
      </button>
    </FormContainer>
  );
}

export default Form;
