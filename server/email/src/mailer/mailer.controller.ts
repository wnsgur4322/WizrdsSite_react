/**
 * Mailer Controller
 * Author: Rhys
 * Description: Defines routes and methods to execute. Contains POST route to send an email to WebWizrds
 * Use Cases: Send an email to WebWizrds
 */

import { 
    Body, 
    Controller, 
    Post 
} from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { MailerDto } from '../dtos/mailer.dto';
import { MailerOptionsDto } from '../dtos/mailer-options.dto';
import { MailServerError } from '../dtos/mail-server.error';
import * as dotenv from 'dotenv';
dotenv.config();

@Controller('/api/mail')
export class MailerController {
    // route /api/mail/send
    @Post('/send')
    async sendMail(@Body() body: MailerDto) {
        var transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const emailBody = () => {
            let emailInfo = `Contact Info: ${body.name.trim()} - ${body.sender.trim()}`;
            if (body.content) {
                emailInfo += `\n\n ${body.content}`
            }

            return emailInfo;
        }

        const mailOptions: MailerOptionsDto = {
            from: `${body.name.trim()} < ${body.sender.trim()} >`,
            to: process.env.EMAIL_TO,
            subject: `${body.organization.trim()}`,
            text: emailBody()
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                throw new MailServerError('Internal Server Error').serializeErrors();
            }
            console.log('Email sent: ' + info.response);
        });
    }
}
