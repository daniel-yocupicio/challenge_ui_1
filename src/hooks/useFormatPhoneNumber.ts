import { useCallback, useState } from 'react';

// custom hook to add a number format to my string
const useFormatPhoneNumber = (initialNumber: string = '+880') => {
    const [string, setString] = useState<string>(initialNumber);

    const handleNumber = useCallback((text: string) => {
        if (text.length < initialNumber.length) {
            return; // dont save any changes in my string.
        }

    // get only the digits after the initial code
    const newString = text.slice(initialNumber.length);
    const cleaned = newString.replace(/\D/g, ''); // remove non-digits

    // Apply dynamic formatting
    let formatted = initialNumber;

    if (cleaned.length > 0) {
        formatted += ' ' + cleaned.slice(0, 3);
    }
    if (cleaned.length > 3) {
        formatted += ' ' + cleaned.slice(3, 6);
    }
    if (cleaned.length > 6) {
        formatted += ' ' + cleaned.slice(6, 10);
    }

    setString(formatted.trim());
    }, [initialNumber]);

    return {
        string,
        handleNumber,
    };
};


export default useFormatPhoneNumber;
