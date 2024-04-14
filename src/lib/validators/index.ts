import validator from 'validator';

interface ValidationResult<T> {
    error: string | null;
    sanitizedValue: T | null;
}

// Validation and sanitization for name
export function validateAndSanitizeName(name: string): ValidationResult<string> {
    if (validator.isEmpty(name)) {
        return { error: 'Name is required.', sanitizedValue: null };
    } else {
        return { error: null, sanitizedValue: validator.escape(name) };
    }
}

// Validation for email and normalization
export function validateAndSanitizeEmail(email: string): ValidationResult<string> {
    if (!validator.isEmail(email)) {
        return { error: 'Invalid email format.', sanitizedValue: null };
    } else {
        return { error: null, sanitizedValue: validator.normalizeEmail(email) as string };
    }
}

// Validation and sanitization for phone number
export function validateAndSanitizePhoneNumber(phoneNumber: string): ValidationResult<string> {
    if (!validator.isLength(phoneNumber, { min: 7, max: 18 })) {
        return { error: 'Invalid phone number.', sanitizedValue: null };
    } else {
        return { error: null, sanitizedValue: validator.blacklist(phoneNumber, '\\-() ') };
    }
}

// Validation and sanitization for address
export function validateAndSanitizeAddress(address: string | null | undefined): ValidationResult<string> {
    if (address && !validator.matches(address, /^[a-zA-Z0-9\s.,#-]+$/)) {
        return { error: 'Invalid street address.', sanitizedValue: null };
    } else if (address) {
        let sanitizedAddress = validator.escape(address);
        sanitizedAddress = sanitizedAddress.replace(/\bhttps?:\/\/\S+/gi, '');
        sanitizedAddress = sanitizedAddress.replace(/[&<>"']/g, '');
        return { error: null, sanitizedValue: sanitizedAddress };
    } else {
        return { error: null, sanitizedValue: 'address not given' };
    }
}

// Validation for message content
export function validateAndSanitizeMessage(message: string): ValidationResult<string> {
    if (!validator.isLength(message, { min: 7, max: 100 })) {
        return { error: 'Invalid message.', sanitizedValue: null };
    } else {
        return { error: null, sanitizedValue: message.replace(/[^\w\s.,!?()-]/g, '').trim() };
    }
}