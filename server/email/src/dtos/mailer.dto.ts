/**
 * Mailer Dto
 * Author: Rhys
 * Description: Mailer Dto validates the contact us form field input
 * Use Cases: Send email to Wizrds contact email with details 
 */

import { 
    IsEmail, 
    IsString,
    IsNotEmpty,
    IsOptional
} from 'class-validator';

export class MailerDto {
    @IsEmail()
    @IsNotEmpty()
    sender: string;

    @IsString()
    @IsNotEmpty()
    organization: string;

    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    content?: string;
}