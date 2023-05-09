import '@testing-library/react';
import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer component', () => {
  it('renders the correct copyright text', () => {
    render(<Footer />);
    const copyrightText = screen.getByText('\u00A9 Ryan Bagan 2023');
    expect(copyrightText).toBeInTheDocument();
  });
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
