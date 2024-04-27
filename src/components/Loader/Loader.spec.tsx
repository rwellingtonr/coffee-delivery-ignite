import { render, screen } from '@testing-library/react'
import { Loader } from '.';

describe('App', () => {
  it('renders headline', () => {
    render(<Loader size={20} />);

    // screen.debug();

    expect(screen).toBeDefined()
  });
});