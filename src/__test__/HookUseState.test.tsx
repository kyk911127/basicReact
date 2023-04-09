import React from 'react';
import { render, screen } from '@testing-library/react';
import HookUseState from '../hooks/HookUseState';

test('renders learn react link', () => {
  render(<HookUseState />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
