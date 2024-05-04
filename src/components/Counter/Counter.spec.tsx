import '@testing-library/jest-dom/vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '~/provider/ThemeProvider';
import { Counter } from '.';
import { ShippingCartProvider } from '~/context/ShoppingCart';

describe('<Counter />', () => {
  beforeEach(() => {
    const fakeFunction = vi.fn().mockImplementation((id: number, qty: number) => {
      return
    })
    render(
      <ShippingCartProvider>
        <ThemeProvider>
          <Counter id={123} onChangeQuantity={fakeFunction} />
        </ThemeProvider>
      </ShippingCartProvider>
    )
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('Should start with number 1', () => {
    const span = screen.getByTestId('counter-container').querySelector('span')
    expect(span).toHaveTextContent('1')
  })


  it('Should increase the counter to 2', () => {
    const increaseButton = screen.getByTestId('increase-button')
    const span = screen.getByTestId('counter-container').querySelector('span')
    expect(span).toHaveTextContent('1')

    fireEvent.click(increaseButton)
    expect(span).toHaveTextContent('2')
  })

  it('Should decrease the counter from 2 to 1', () => {
    const increaseButton = screen.getByTestId('increase-button')
    const span = screen.getByTestId('counter-container').querySelector('span')
    fireEvent.click(increaseButton)
    expect(span).toHaveTextContent('2')

    const decreaseButton = screen.getByTestId('decrease-button')
    fireEvent.click(decreaseButton)
    expect(span).toHaveTextContent('1')
  })
})