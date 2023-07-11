import axios, { AxiosResponse } from 'axios';

interface SendContactEmailParams {
  name: string;
  senderMail: string;
  message: string;
}

const sendContactEmail = async ({
  name,
  senderMail,
  message
}: SendContactEmailParams): Promise<AxiosResponse> => {
  const infoBody = {
    name,
    senderMail,
    message
  };

  try {
    const response = await axios.post('/api/contact', infoBody);
    // console.log(response, 'TRY');
    return response;
  } catch ({ response }: any) {
    // console.log(response, 'CATCH');
    return response;
  }
};

export default sendContactEmail;
