import axios, { AxiosResponse } from 'axios';
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

const sendContactEmail = async ({
  name,
  senderMail,
  message,
  website,
  language
}: SendContactEmailParams): Promise<AxiosResponse | ContactResponse> => {
  const infoBody = {
    name,
    senderMail,
    message,
    website,
    language
  };

  try {
    const response = await axios.post('/api/contact', infoBody);
    // console.log(response, 'TRY');
    return response;
  } catch (error: unknown) {
    if (axios.isAxiosError<string>(error) && error.response) {
      const { response } = error;
      return {
        data: response.data,
        status: response.status
      };
    }
    return {
      data: translations[language].contact.fallbackError,
      status: 403
    };
  }
};

export default sendContactEmail;
