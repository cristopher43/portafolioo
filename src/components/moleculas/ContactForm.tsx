import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const ContactForm: React.FC = () => {
  return (
    <form className="flex flex-col space-y-4">
      <Input type="email" placeholder="Ingresa tu correo" />
      <Button>Enviar</Button>
    </form>
  );
};

export default ContactForm;
