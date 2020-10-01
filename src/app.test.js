import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from './test-utils'
import App from './App';

describe('Render tests', () => {
  it('renders the header correctly', () => {
    render(<App />);
    let headerItems = screen.getAllByRole('heading');
    expect(headerItems[0].textContent).toBe('Virtual Store');
    expect(headerItems[1].textContent).toBe('Cart (0)');
  })
  it('renders the spinners waiting for content', () => {
    render(<App />);
    let spinner = screen.getByTestId('spinner');
    expect(spinner).toBeTruthy();
  })
});
