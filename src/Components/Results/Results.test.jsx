import '@testing-library/react';
import { render, screen } from '@testing-library/react';

import Results from '.';

describe('Will render Results', () => {
  test('Will render Results as expected', () => {
    render(<Results />);
    const resultsElement = screen.getByText(/Results/i);
    expect(resultsElement).toBeTruthy();
  }
  );
}
);
