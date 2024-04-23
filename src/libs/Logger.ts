import pino from 'pino';

const options = {
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
};

export const logger = pino(options);
