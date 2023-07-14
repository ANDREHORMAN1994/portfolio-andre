import nodemailer from 'nodemailer';
import sendgridTransport from 'nodemailer-sendgrid-transport';

import { NextApiRequest, NextApiResponse } from 'next';

const { EMAIL_ADRESS, SENDER_ADRESS, SENDGRID_API_KEY } = process.env;

const options = {
  auth: {
    api_key: SENDGRID_API_KEY
  }
};

const transporter = nodemailer.createTransport(sendgridTransport(options));

const emailService = async (
  name: string,
  senderMail: string,
  content: string
): Promise<{ message: string }> => {
  const message = {
    from: SENDER_ADRESS,
    to: EMAIL_ADRESS,
    subject: `Nova mensagem de contato - ${name}`,
    html: `<p><b>Email:</b> ${senderMail}<br /><b>Mensagem:</b> ${content}</p>`,
    replyTo: senderMail
  };

  try {
    return await new Promise((resolve, reject) => {
      transporter.sendMail(message, (error, info) => {
        if (error) {
          reject(error);
        }
        if (info) {
          resolve({ message: 'success' });
        }
      });
    });
  } catch (error) {
    // console.log(error);
    return { message: 'failed' };
  }
};

const emailController = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { name, senderMail, message } = req.body;
  // console.log('chegou aqui ?', name, senderMail, message);

  if (!name?.trim() || !senderMail?.trim() || !message?.trim()) {
    res.status(403).send('Algum campo se encontra vazio ou inválido! 😅');
    return;
  }

  const emailRes: { message: string } = await emailService(
    name,
    senderMail,
    message
  );
  // console.log('Resposta:', emailRes);
  if (!emailRes || emailRes?.message !== 'success') {
    res
      .status(403)
      .send(
        '🚨 Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente! 😓'
      );
    return;
  }

  res.status(200).send('E-mail enviado com sucesso! 😁');
};

export default emailController;
