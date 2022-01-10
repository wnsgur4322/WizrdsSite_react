/**
 * Custom Error Dto
 * Author: Rhys
 * Description: Defines the format of error messages to make frontend error display easy to incorporate
 * Use Cases: Extend the custom error to enforce standardized error format
 */

export abstract class CustomError extends Error {
    abstract statusCode: number
    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, CustomError.prototype);
    }

    abstract serializeErrors(): {
        statusCode: number;
        message?: string[];
        error: string;
    };
}