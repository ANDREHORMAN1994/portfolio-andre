import sendGridMail from '@sendgrid/mail';
import { type NextApiRequest, type NextApiResponse } from 'next';
import { isLanguage } from '@/i18n/translations';

const { EMAIL_ADRESS, SENDER_ADRESS, SENDGRID_API_KEY } = process.env;
const attemptsByIp = new Map<string, number[]>();

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 3000;
const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX_ATTEMPTS = 3;

const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const getIpAddress = (req: NextApiRequest): string => {
  const forwardedFor = req.headers['x-forwarded-for'];
  const ipAddress = Array.isArray(forwardedFor)
    ? forwardedFor[0]
    : forwardedFor?.split(',')[0];

  return ipAddress?.trim() ?? req.socket.remoteAddress ?? 'unknown';
};

const hasExceededRateLimit = (ipAddress: string): boolean => {
  const now = Date.now();
  const recentAttempts = (attemptsByIp.get(ipAddress) ?? []).filter(
    attempt => now - attempt < RATE_LIMIT_WINDOW
  );

  recentAttempts.push(now);
  attemptsByIp.set(ipAddress, recentAttempts);

  return recentAttempts.length > RATE_LIMIT_MAX_ATTEMPTS;
};

const emailService = async (
  name: string,
  senderMail: string,
  content: string
): Promise<{ message: string }> => {
  if (!EMAIL_ADRESS || !SENDER_ADRESS || !SENDGRID_API_KEY) {
    return { message: 'failed' };
  }

  sendGridMail.setApiKey(SENDGRID_API_KEY);

  const message = {
    from: SENDER_ADRESS,
    to: EMAIL_ADRESS,
    subject: `Nova mensagem de contato - ${name.replace(/[\r\n]+/g, ' ')}`,
    text: `E-mail: ${senderMail}\n\nMensagem:\n${content}`,
    replyTo: senderMail
  };

  try {
    await sendGridMail.send(message);
    return { message: 'success' };
  } catch (error) {
    // console.log(error);
    return { message: 'failed' };
  }
};

const emailController = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).send('Método não permitido.');
    return;
  }

  const body = typeof req.body === 'object' && req.body != null ? req.body : {};
  const { name, senderMail, message, website, language } = body as Record<
    string,
    unknown
  >;
  const responseLanguage =
    typeof language === 'string' && isLanguage(language) ? language : 'pt';
  const responseText =
    responseLanguage === 'en'
      ? {
          success: 'E-mail sent successfully! 😁',
          rateLimit: 'Too many attempts. Please wait a minute and try again.',
          invalid: 'One or more fields are empty or invalid! 😅',
          error:
            '🚨 An error occurred while sending your message. Please try again! 😓'
        }
      : {
          success: 'E-mail enviado com sucesso! 😁',
          rateLimit: 'Muitas tentativas. Aguarde um minuto e tente novamente.',
          invalid: 'Algum campo se encontra vazio ou inválido! 😅',
          error:
            '🚨 Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente! 😓'
        };

  if (typeof website === 'string' && website.trim().length > 0) {
    res.status(200).send(responseText.success);
    return;
  }

  if (hasExceededRateLimit(getIpAddress(req))) {
    res.status(429).send(responseText.rateLimit);
    return;
  }

  if (
    typeof name !== 'string' ||
    typeof senderMail !== 'string' ||
    typeof message !== 'string'
  ) {
    res.status(400).send(responseText.invalid);
    return;
  }

  const trimmedName = name.trim();
  const trimmedEmail = senderMail.trim();
  const trimmedMessage = message.trim();

  if (
    trimmedName.length === 0 ||
    trimmedName.length > MAX_NAME_LENGTH ||
    trimmedEmail.length === 0 ||
    trimmedEmail.length > MAX_EMAIL_LENGTH ||
    !isValidEmail(trimmedEmail) ||
    trimmedMessage.length === 0 ||
    trimmedMessage.length > MAX_MESSAGE_LENGTH
  ) {
    res.status(400).send(responseText.invalid);
    return;
  }

  const emailRes: { message: string } = await emailService(
    trimmedName,
    trimmedEmail,
    trimmedMessage
  );
  // console.log('Resposta:', emailRes);
  if (!emailRes || emailRes?.message !== 'success') {
    res.status(403).send(responseText.error);
    return;
  }

  res.status(200).send(responseText.success);
};

export default emailController;
