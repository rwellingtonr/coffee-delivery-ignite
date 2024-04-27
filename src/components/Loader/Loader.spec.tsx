import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '~/provider/ThemeProvider';
import { Loader } from '.';

describe('<Loader />', () => {
  it('show be able to see the Loader', () => {
    const randomSize = ~~(Math.random() * 100) || 1

    render(
      <ThemeProvider>
        <Loader size={randomSize} />
      </ThemeProvider>
    );
    const span = screen.getByTestId('span-loader')
    expect(span).toBeInTheDocument()

    const width = `${randomSize}rem`
    const height = `${randomSize * 0.83}rem`

    expect(span).toHaveStyle({
      width, height
    })
  });
});