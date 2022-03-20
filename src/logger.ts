import * as colors from 'ansi-colors';

export const logger = {
  info: (message?: string) => {
    console.info(`${colors.blue('INFO    |')} ${message}`);
  },

  success: (message?: string) => {
    console.info(`${colors.green('SUCCESS |')} ${message}`);
  },

  warning: (message?: string) => {
    console.warn(`${colors.yellow('WARNING |')} ${message}`);
  },

  error: (message?: string) => {
    console.error(`${colors.red('ERROR   |')} ${message}`);
  },
};
