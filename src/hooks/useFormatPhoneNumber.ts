import { useState } from 'react';

const useFormatPhoneNumber = (initialNumber: string = '+880') => {
    const [string, setString] = useState<string>(initialNumber);

    const handleNumber = (text: string) => {
        if (text.length < initialNumber.length) {
            return; // dont save any changes in my string.
        }

    // Obtenemos solo los dígitos después del código inicial
    const newString = text.slice(initialNumber.length);
    const cleaned = newString.replace(/\D/g, ''); // eliminar no-dígitos

    // Aplicar formateo dinámico
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
    };

    return {
        string,
        handleNumber,
    };
};


export default useFormatPhoneNumber;
