import axios, { AxiosResponse } from 'axios';

interface SendContactEmailParams {
  name: string;
  senderMail: string;
  message: string;
}

interface ContactResponse {
  data: string;
  status: number;
}

class ErrorForm extends Error {
  response: ContactResponse | undefined;
}

const sendContactEmail = async ({
  name,
  senderMail,
  message
}: SendContactEmailParams): Promise<AxiosResponse | ContactResponse> => {
  const infoBody = {
    name,
    senderMail,
    message
  };

  try {
    const response = await axios.post('/api/contact', infoBody);
    // console.log(response, 'TRY');
    return response;
  } catch (error: unknown) {
    if (error instanceof ErrorForm && error.response) {
      const { response } = error;
      // console.log(response, 'CATCH');
      return response;
    }
    return {
      data: '🚨 Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente! 😓',
      status: 403
    };
  }
};

export default sendContactEmail;
