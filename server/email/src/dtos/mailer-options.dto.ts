/**
 * Mailer Options Dto
 * Author: Rhys
 * Description: Mailer Options Dto validates that the options object contains valid types
 * Use Cases: Apply to mailerOptions object to validate types
 */

import {
    IsString,
    IsNotEmpty,
    IsOptional,
    IsArray
} from 'class-validator';

export class MailerOptionsDto {
    @IsString()
    @IsNotEmpty()
    from: string;

    @IsString()
    @IsNotEmpty()
    to: string;

    @IsString()
    @IsNotEmpty()
    subject: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    text?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    html?: string;

    @IsOptional()
    @IsArray()
    @IsNotEmpty()
    attachments?: Array<{}>;
}