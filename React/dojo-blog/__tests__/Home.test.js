import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../src/Home';

test('renders the component', () => {
  render(<Home />);
  const element = screen.getByText('Hello, World!');
  expect(element).toBeInTheDocument();
});
