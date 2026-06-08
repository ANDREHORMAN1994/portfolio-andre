import { ReactElement, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { FormContainer, HiddenField, Input, TextArea } from './styles';
import { themeDark, themeLight } from '@/styles/theme';
import sendContactEmail from '@/services/sendMail';
import { useLanguage } from '@/contexts/LanguageContext';

interface FormsProps {
  status: boolean;
}

function Form({ status }: FormsProps): ReactElement {
  const { language, text } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState('');
  const [contactMethod, setContactMethod] = useState('email');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleValidation = (): void => {
    const valName = name.trim().length > 0;
    const valEmail = email.trim().length > 0;
    const valMessage = message.trim().length > 0;

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
      try {
        const { data, status: httpStatus }: { data: string; status: number } =
          await sendContactEmail({
            name,
            senderMail: email,
            message,
            website,
            language
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
      } catch (error) {
        // console.log(error);
      }
    } else {
      const whatsappMessage = text.contact.whatsappMessage(name, message);

      // Exemplo: abrir uma nova janela com o link do WhatsApp
      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(
        `https://wa.me/5583993638760?text=${encodedMessage}`,
        '_blank',
        'noopener,noreferrer'
      );
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
        <p>{text.contact.chooseMethod}</p>
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
        aria-label={text.contact.name}
        type="text"
        placeholder={text.contact.name}
        onChange={({ target }) => {
          setName(target.value);
        }}
        value={name}
        $contact={contactMethod}
        autoComplete="off"
        spellCheck={false}
        maxLength={100}
        required
      />
      {contactMethod === 'email' && (
        <Input
          aria-label="E-mail"
          type="email"
          placeholder="E-mail"
          onChange={({ target }) => {
            setEmail(target.value);
          }}
          value={email}
          $contact={contactMethod}
          autoComplete="off"
          spellCheck={false}
          maxLength={254}
          required
        />
      )}
      <TextArea
        aria-label={text.contact.message}
        placeholder={text.contact.message}
        onChange={({ target }) => {
          setMessage(target.value);
        }}
        autoComplete="off"
        maxLength={3000}
        value={message}
        required
      />
      <HiddenField aria-hidden="true">
        <label htmlFor="website">
          {text.contact.hiddenField}
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={({ target }) => {
              setWebsite(target.value);
            }}
          />
        </label>
      </HiddenField>
      <button type="submit" disabled={isDisabled}>
        {text.contact.send}
        {contactMethod === 'email' ? <AiOutlineMail /> : <BsWhatsapp />}
      </button>
    </FormContainer>
  );
}

export default Form;
