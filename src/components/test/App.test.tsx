import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../templates/App';

test('aparece el texto "soy Cristopher Candia" en la página', () => {
  render(<App />);
  const elements = screen.getAllByText(/soy cristopher candia/i);
  expect(elements.length).toBeGreaterThan(0);
});
