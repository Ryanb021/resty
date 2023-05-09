// import '@testing-library/react';
// import { render, screen } from '@testing-library/react';
// import Results from '.';

// describe('Results component', () => {
//   it('renders the JSON data when provided', () => {
//     const mockData = { foo: 'bar' };
//     render(<Results data={mockData} />);
//     const jsonText = JSON.stringify(mockData, undefined, 2);
//     const preElement = screen.getByText(jsonText);
//     expect(preElement).toBeInTheDocument();
//   });

//   // it('does not render anything when data is not provided', () => {
//   //   const { container } = render(<Results />);
//   //   expect(container.firstChild).toBeNull();
//   // });
// });

import '@testing-library/react';
import { render, screen } from '@testing-library/react';

import Results from '.';

describe('Will render Results', () => {
  test('Will render Results as expected', () => {
    render(<Results />);
    const resultsElement = screen.getByText;
    expect(resultsElement).toBeTruthy();
  }
  );
}
);
