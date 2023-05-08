import '@testing-library/react';
import { render, screen } from '@testing-library/react';

import Footer from '.';

describe('Will render Footer', () => { 
  test('Will render Footeras expected', () => {
    render(<Footer />);
    const footerElement = screen.getByText(/&copy; Ryan Bagan 2023/i);
    expect (footerElement).toString();
  })
})
