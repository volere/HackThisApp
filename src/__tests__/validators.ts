import {
    validateAndSanitizeName,
    validateAndSanitizeEmail,
    validateAndSanitizePhoneNumber,
    validateAndSanitizeAddress,
    validateAndSanitizeMessage
} from '../lib/validators/index'

describe('Validation and Sanitization Tests', () => {
    describe('validateAndSanitizeName', () => {
        test('should error on empty name', () => {
            const result = validateAndSanitizeName('');
            expect(result).toEqual({ error: 'Name is required.', sanitizedValue: null });
        });

        test('should sanitize and return valid name', () => {
            const result = validateAndSanitizeName('John Doe<');
            expect(result).toEqual({ error: null, sanitizedValue: 'John Doe&lt;' });
        });
    });

    describe('validateAndSanitizeEmail', () => {
        test('should error on invalid email', () => {
            const result = validateAndSanitizeEmail('john.doe');
            expect(result).toEqual({ error: 'Invalid email format.', sanitizedValue: null });
        });

        test('should normalize and return valid email', () => {
            const result = validateAndSanitizeEmail('JOHN.DOE@EXAMPLE.COM');
            expect(result).toEqual({ error: null, sanitizedValue: 'john.doe@example.com' });
        });
    });

    describe('validateAndSanitizePhoneNumber', () => {
        test('should error on too short phone number', () => {
            const result = validateAndSanitizePhoneNumber('12345');
            expect(result).toEqual({ error: 'Invalid phone number.', sanitizedValue: null });
        });

        test('should sanitize and return valid phone number', () => {
            const result = validateAndSanitizePhoneNumber('123-456-7890');
            expect(result).toEqual({ error: null, sanitizedValue: '1234567890' });
        });
    });

    describe('validateAndSanitizeAddress', () => {
        test('should return error for invalid characters in address', () => {
            const result = validateAndSanitizeAddress('123 Main St. !@#$');
            expect(result).toEqual({ error: 'Invalid street address.', sanitizedValue: null });
        });

        test('should sanitize and return valid address', () => {
            const result = validateAndSanitizeAddress('123 Main St.');
            expect(result).toEqual({ error: null, sanitizedValue: '123 Main St.' });
        });

        test('should handle null address input', () => {
            const result = validateAndSanitizeAddress(null);
            expect(result).toEqual({ error: null, sanitizedValue: 'address not given' });
        });
    });

    describe('validateAndSanitizeMessage', () => {
        test('should error on too short message', () => {
            const result = validateAndSanitizeMessage('Hi');
            expect(result).toEqual({ error: 'Invalid message.', sanitizedValue: null });
        });

        test('should sanitize and return valid message', () => {
            const result = validateAndSanitizeMessage('Hello, world! This is a test message.');
            expect(result).toEqual({ error: null, sanitizedValue: 'Hello, world! This is a test message.' });
        });
    });
});