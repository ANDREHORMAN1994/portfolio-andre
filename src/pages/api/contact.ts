import nodemailer from 'nodemailer';
import sendgridTransport from 'nodemailer-sendgrid-transport';

import { NextApiRequest, NextApiResponse } from 'next';

const email = process.env.EMAIL_ADRESS;
const key = process.env.SENDGRID_API_KEY;

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: key
    }
  })
);

const emailService = async (
  name: string,
  senderMail: string,
  content: string
): Promise<boolean | unknown> => {
  const message = {
    from: email,
    to: email,
    subject: `Nova mensagem de contato - ${name}`,
    html: `<p><b>Email:</b> ${senderMail}<br /><b>Mensagem:</b> ${content}</p>`,
    replyTo: senderMail
  };

  try {
    return await transporter.sendMail(message);
  } catch (error) {
    console.log(error);
    return false;
  }
};

const emailController = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { name, senderMail, message } = req.body;
  console.log('chegou aqui ?', name, senderMail, message);

  if (!name.trim() || !senderMail.trim() || !message.trim()) {
    res.status(403).send('Algum campo se encontra vazio ou inválido! 😅');
    return;
  }

  const emailRes = await emailService(name, senderMail, message);
  console.log('Resposta:', emailRes);
  if (!emailRes) {
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
