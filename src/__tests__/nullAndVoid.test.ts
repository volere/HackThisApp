//@ts-nocheck
import { validateAndSanitizeName, validateAndSanitizeEmail, validateAndSanitizePhoneNumber, validateAndSanitizeAddress, validateAndSanitizeMessage } from "@/lib/validation/validators";




describe('Handling null inputs efficiently', () => {
    describe.each([
        [ 'Name', validateAndSanitizeName, 'Name is required.' ],
        [ 'Email', validateAndSanitizeEmail, 'Invalid email format.' ],
        [ 'Phone Number', validateAndSanitizePhoneNumber, 'Invalid phone number.' ],
        [ 'Address', validateAndSanitizeAddress, null ],  // Special case for handling null specifically mentioned in the function logic
        [ 'Message', validateAndSanitizeMessage, 'Invalid message.' ]
    ])('%s Validation', (field, validationFunction, expectedErrorMessage) => {
        test(`should handle null input for ${field.toLowerCase()}`, () => {
            //@ts-ignore
            const result = validationFunction(null);
            const expected = expectedErrorMessage ? { error: expectedErrorMessage, sanitizedValue: null } : { error: null, sanitizedValue: 'address not given' };
            expect(result).toEqual(expected);
        });
    });

    test('should handle undefined input for address (treated like null)', () => {
        const result = validateAndSanitizeAddress(undefined);
        expect(result).toEqual({ error: null, sanitizedValue: 'address not given' });
    });
});



describe('Edge Case Tests for Null and Undefined Inputs', () => {
    test('validateAndSanitizeName should handle null input gracefully', () => {
        const result = validateAndSanitizeName(null);
        expect(result).toEqual({ error: 'Invalid name format.', sanitizedValue: null });
    });

    test('validateAndSanitizeName should handle undefined input gracefully', () => {
        const result = validateAndSanitizeName(undefined);
        expect(result).toEqual({ error: 'Name is required.', sanitizedValue: null });
    });

    test('validateAndSanitizeEmail should handle null input gracefully', () => {
        const result = validateAndSanitizeEmail(null);
        expect(result).toEqual({ error: 'Invalid email format.', sanitizedValue: null });
    });

    test('validateAndSanitizeEmail should handle undefined input gracefully', () => {
        const result = validateAndSanitizeEmail(undefined);
        expect(result).toEqual({ error: 'Invalid email format.', sanitizedValue: null });
    });

    test('validateAndSanitizePhoneNumber should handle null input gracefully', () => {
        const result = validateAndSanitizePhoneNumber(null);
        expect(result).toEqual({ error: 'Invalid phone number.', sanitizedValue: null });
    });

    test('validateAndSanitizePhoneNumber should handle undefined input gracefully', () => {
        const result = validateAndSanitizePhoneNumber(undefined);
        expect(result).toEqual({ error: 'Invalid phone number.', sanitizedValue: null });
    });

    test('validateAndSanitizeAddress should handle null input explicitly', () => {
        const result = validateAndSanitizeAddress(null);
        expect(result).toEqual({ error: null, sanitizedValue: 'address not given' });
    });

    test('validateAndSanitizeAddress should handle undefined input like null', () => {
        const result = validateAndSanitizeAddress(undefined);
        expect(result).toEqual({ error: null, sanitizedValue: 'address not given' });
    });

    test('validateAndSanitizeMessage should handle null input gracefully', () => {
        const result = validateAndSanitizeMessage(null);
        expect(result).toEqual({ error: 'no message.', sanitizedValue: null });
    });

    test('validateAndSanitizeMessage should handle undefined input gracefully', () => {
        const result = validateAndSanitizeMessage(undefined);
        expect(result).toEqual({ error: 'no message.', sanitizedValue: null });
    });
});