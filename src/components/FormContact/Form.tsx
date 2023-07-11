import { ReactElement, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { FormContainer, Input, TextArea } from './styles';
import { themeDark, themeLight } from '@/styles/theme';
import sendContactEmail from '@/services/sendMail';

interface FormsProps {
  status: boolean;
}

function Form({ status }: FormsProps): ReactElement {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [contactMethod, setContactMethod] = useState('email');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleValidation = (): void => {
    const valName = name.length > 0;
    const valEmail = email.length > 0;
    const valMessage = message.length > 0;

    setIsDisabled(
      contactMethod === 'email'
        ? !(valName && valEmail && valMessage)
        : !(valName && valMessage)
    );
  };

  const verifyBackground = (http: number, theme: typeof themeDark): string =>
    http !== 200 ? theme.error : theme.primary;

  const handleFormSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsDisabled(true);

    if (contactMethod === 'email') {
      const { data, status: httpStatus }: { data: string; status: number } =
        await sendContactEmail({
          name,
          senderMail: email,
          message
        });

      toast(data, {
        style: {
          background: status
            ? verifyBackground(httpStatus, themeLight)
            : verifyBackground(httpStatus, themeDark),
          color: '#fff'
        }
      });

      if (httpStatus === 200) {
        setName('');
        setEmail('');
        setMessage('');
        setIsDisabled(true);
      } else {
        setIsDisabled(false);
      }
    } else {
      const whatsappMessage = `Olá, meu nome é ${name} e tenho uma mensagem para você: ${message}`;

      // Exemplo: abrir uma nova janela com o link do WhatsApp
      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(`https://wa.me/5583993638760?text=${encodedMessage}`);
      setIsDisabled(false);
    }
  };

  useEffect(handleValidation, [name, email, message, contactMethod]);

  return (
    <FormContainer
      data-aos="fade-up"
      onSubmit={async e => {
        await handleFormSubmit(e);
      }}
    >
      <div className="contact-container">
        <p>Escolha uma forma de contato :</p>
        <div>
          <label htmlFor="email">
            <input
              type="radio"
              id="email"
              name="contactMethod"
              value="email"
              checked={contactMethod === 'email'}
              onChange={() => {
                setContactMethod('email');
              }}
            />
            E-mail <AiOutlineMail />
          </label>

          <label htmlFor="whatsapp">
            <input
              type="radio"
              id="whatsapp"
              name="contactMethod"
              value="whatsapp"
              checked={contactMethod === 'whatsapp'}
              onChange={() => {
                setContactMethod('whatsapp');
              }}
            />
            WhatsApp <BsWhatsapp />
          </label>
        </div>
      </div>
      <Input
        type="text"
        placeholder="Nome"
        status={status}
        onChange={({ target }) => {
          setName(target.value);
        }}
        value={name}
        contact={contactMethod}
        autoComplete="off"
        spellCheck={false}
        required
      />
      {contactMethod === 'email' && (
        <Input
          type="email"
          placeholder="E-mail"
          status={status}
          onChange={({ target }) => {
            setEmail(target.value);
          }}
          value={email}
          contact={contactMethod}
          autoComplete="off"
          spellCheck={false}
          required
        />
      )}
      <TextArea
        placeholder="Mensagem"
        onChange={({ target }) => {
          setMessage(target.value);
        }}
        autoComplete="off"
        value={message}
      />
      <button type="submit" disabled={isDisabled}>
        ENVIAR MENSAGEM
        {contactMethod === 'email' ? <AiOutlineMail /> : <BsWhatsapp />}
      </button>
    </FormContainer>
  );
}

export default Form;
