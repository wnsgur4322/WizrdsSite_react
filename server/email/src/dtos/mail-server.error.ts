/**
 * Mail Server Error
 * Author: Rhys
 * Description: Defines the error returned to the frontend when the mail server fails to send an email
 * Use Cases: Throw error when the mail server fails to send an email
 */

import { CustomError } from './custom.error';

export class MailServerError extends CustomError {
    statusCode = 500;
    constructor(
        public message: string
    ) {
        super(message);
        
        Object.setPrototypeOf(this, MailServerError.prototype);
    }

    serializeErrors() {
        return { 
            statusCode: this.statusCode,
            error: this.message
        };
    }
}