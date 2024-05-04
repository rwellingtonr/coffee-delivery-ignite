import '@testing-library/jest-dom/vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '~/provider/ThemeProvider';
import { InputText } from '.';


describe('<InputText />', () => {
  it('Should be possible to type "Hello World"', () => {
    render(
      <ThemeProvider>
        <InputText error={false} />
      </ThemeProvider>
    );

    const input = screen.getByRole('textbox') as HTMLInputElement
    fireEvent.change(input, { target: { value: "Hello World" } });

    expect(input).toHaveStyle('background: inherit;')
    expect(input?.value).toBe('Hello World')
  })

  it('Should change the border to #ff6a5a if input got an error', () => {
    render(
      <ThemeProvider>
        <InputText error={true} />
      </ThemeProvider>
    );

    const container = screen.getByTestId('input-container')
    expect(container).toHaveStyle('border: 1px solid #ff6a5a')
  })

  it('Should NOT have border #ff6a5a if input is OK', () => {
    render(
      <ThemeProvider>
        <InputText error={false} />
      </ThemeProvider>
    );

    const container = screen.getByTestId('input-container')
    expect(container).not.toHaveStyle('border: 1px solid #ff6a5a')
  })

  it('Should display "opcional" if this input is required', () => {
    render(
      <ThemeProvider>
        <InputText error={false} required />
      </ThemeProvider>
    );

    const text = screen.getByText('opcional')
    expect(text).toBeInTheDocument()
  })

  it('Should NOT display "opcional" if this input is not required', () => {
    render(
      <ThemeProvider>
        <InputText error={false} required={false} />
      </ThemeProvider>
    );


    const container = screen.getByTestId('input-container')
    const textElement = container.querySelector('p')
    expect(textElement).toBeNull()
  })

})