import { useEffect, useState } from 'react';
import { FormContainer, Input, TextArea } from './styles';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleValidation = () => {
    const valName = name.length > 0;
    const valEmail = /^\w+@\w+\.\w+$/gm.test(email);
    const valMessage = message.length > 0;
    setIsDisabled(!(valName && valEmail && valMessage));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Olá, meu nome é ${name} e tenho uma mensagem para você: ${message}`;

    // Exemplo: abrir uma nova janela com o link do WhatsApp
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/5583993638760?text=${encodedMessage}`);
  };

  useEffect(handleValidation, [name, email, message]);

  return (
    <FormContainer data-aos="fade-up" onSubmit={handleFormSubmit}>
      <Input
        type="text"
        placeholder="Nome"
        onChange={({ target }) => setName(target.value)}
        required
      />
      <Input
        type="email"
        placeholder="E-mail"
        onChange={({ target }) => setEmail(target.value)}
        required
      />
      <TextArea
        placeholder="Mensagem"
        onChange={({ target }) => setMessage(target.value)}
        required
      />
      <button type="submit" disabled={isDisabled}>
        Enviar
      </button>
      {/* <WhatsAppWidget phoneNumber="5583993638760" /> */}
    </FormContainer>
  );
}

export default Form;
