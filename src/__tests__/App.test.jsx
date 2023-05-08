import '@testing-library/react';

import { render, screen } from '@testing-library/react';

import App from '../App';

describe('Will render App', () => {
  test('Will render App as expected', () => {
    render(<App />);
    const headerElement = screen.getByText(/RESTy/i);
    expect(headerElement).toBeTruthy();
  });
}
);
