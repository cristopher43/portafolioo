import React, { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
