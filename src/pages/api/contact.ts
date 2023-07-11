import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

const email = process.env.EMAIL_ADRESS;
const password = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: email, // Endereço de e-mail do remetente (Hotmail/Outlook.com)
    pass: password // Senha do e-mail do remetente (Hotmail/Outlook.com)
  }
});

const emailService = async (
  name: string,
  senderMail: string,
  message: string
): Promise<boolean | unknown> => {
  const from =
    name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`;

  const messageInfos = {
    from,
    to: email,
    subject: `Nova mensagem de contato - ${name}`,
    text: message,
    replyTo: from
  };

  try {
    return await new Promise((resolve, reject) => {
      transporter.sendMail(messageInfos, (error, info) => {
        if (error) {
          reject(error);
        }
        resolve(info);
      });
    });
  } catch (error) {
    return false;
  }
};

const emailController = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { name, senderMail, message } = req.body;
  // console.log('chegou aqui ?', name, senderMail, message);

  if (!name || !senderMail || !message) {
    res.status(403).send('Algum campo se encontra vazio ou inválido! 😅');
    return;
  }

  const emailRes = await emailService(name, senderMail, message);
  if (!emailRes) {
    res
      .status(403)
      .send(
        'Ocorreu um erro ao tentar enviar sua mensagem 🚨. Tente novamente! 😓'
      );
    return;
  }

  res.status(200).send('E-mail enviado com sucesso! 😁');
};

export default emailController;
