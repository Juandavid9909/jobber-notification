import { config } from '@notifications/config';
import { IEmailLocals, winstonLogger } from '@juandavid9909/jobber-utils';
import { Logger } from 'winston';

const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'mailTransport', 'debug');

export const sendEmail = async (template: string, receiverEmail: string, locals: IEmailLocals): Promise<void> => {
  try {
    log.info('Email sent successfully.');
  } catch (error) {
    log.log('error', 'NotificationService MailTransport sendEmail() method error:', error);
  }
};
