import '@testing-library/react';
import { render, screen } from '@testing-library/react';

import Footer from '.';

describe('renders Footer', () => {
  test('renders Footer as expected', () => {
    render(<Footer />);
    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeTruthy();
  }
  );
});

// import '@testing-library/react';
// import { render, screen } from '@testing-library/react';

// import Footer from '.';

// describe('Will render Footer', () => { 
//   test('Will render Footer as expected', () => {
//     render(<Footer />);
//     const footerElement = screen.getByText(/&copy; Ryan Bagan 2023/i);
//     expect (footerElement).toString();
//   })
// })
