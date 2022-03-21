"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const colors = require("ansi-colors");
exports.logger = {
    info: (message) => {
        console.info(`${colors.blue('INFO    |')} ${message}`);
    },
    success: (message) => {
        console.info(`${colors.green('SUCCESS |')} ${message}`);
    },
    warning: (message) => {
        console.warn(`${colors.yellow('WARNING |')} ${message}`);
    },
    error: (message) => {
        console.error(`${colors.red('ERROR   |')} ${message}`);
    },
};
