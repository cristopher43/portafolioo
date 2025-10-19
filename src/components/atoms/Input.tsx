import React from 'react';

interface InputProps {
    type: string;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="px-4 py-2 rounded-lg bg-gray-800 text-white border-none focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
        />
    );
};

export default Input;
