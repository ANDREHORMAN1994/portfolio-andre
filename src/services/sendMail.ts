import { type Language, translations } from '@/i18n/translations';

interface SendContactEmailParams {
  name: string;
  senderMail: string;
  message: string;
  website: string;
  language: Language;
}

interface ContactResponse {
  data: string;
  status: number;
}

interface Web3FormsResponse {
  message?: string;
  success: boolean;
}

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? '';

const getResponseText = (
  language: Language
): Record<'configError' | 'success', string> =>
  language === 'en'
    ? {
        configError: 'Contact form is not configured yet.',
        success: 'E-mail sent successfully! 😁'
      }
    : {
        configError: 'O formulário de contato ainda não foi configurado.',
        success: 'E-mail enviado com sucesso! 😁'
      };

const sendContactEmail = async ({
  name,
  senderMail,
  message,
  website,
  language
}: SendContactEmailParams): Promise<ContactResponse> => {
  const responseText = getResponseText(language);

  if (website.trim().length > 0) {
    return {
      data: responseText.success,
      status: 200
    };
  }

  if (!WEB3FORMS_ACCESS_KEY) {
    return {
      data: responseText.configError,
      status: 403
    };
  }

  const trimmedName = name.trim();
  const trimmedEmail = senderMail.trim();
  const trimmedMessage = message.trim();
  const subjectName = trimmedName.replace(/[\r\n]+/g, ' ');

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        botcheck: false,
        email: trimmedEmail,
        from_name: 'Portfolio André Horman',
        message: trimmedMessage,
        name: trimmedName,
        replyto: trimmedEmail,
        subject: `Nova mensagem de contato - ${subjectName}`
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });
    const result = (await response.json()) as Web3FormsResponse;

    if (!response.ok || !result.success) {
      return {
        data: result.message ?? translations[language].contact.fallbackError,
        status: response.status || 403
      };
    }

    return {
      data: responseText.success,
      status: 200
    };
  } catch (error: unknown) {
    return {
      data: translations[language].contact.fallbackError,
      status: 403
    };
  }
};

export default sendContactEmail;
