import '@testing-library/jest-dom/vitest'
import { fireEvent, screen, } from '@testing-library/react'
import { ThemeProvider } from '~/provider/ThemeProvider';
import { Header } from '.'
import { renderWithRouter } from "~test/utils/renderWithRouter"
import type { ComponentProps } from 'react';

type LinkProps = ComponentProps<'a'> & {
  to: string
}
const navigate = vi.fn()

describe('<Header />', () => {

  beforeEach(() => {
    vi.mock('react-router-dom', async (importOriginal) => ({
      ...await importOriginal<typeof import('react-router-dom')>(),
      Link: ({ to, ...props }: LinkProps) => <a href={to} {...props} />,
      useNavigate: () => navigate
    }))
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  // Renders the header component with logo, location and shopping cart icon
  it('should render the header component with logo, location, and shopping cart icon', () => {
    renderWithRouter(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    // Assert that the logo is rendered
    const logo = screen.getByAltText('Logo da marca com um texto de Coffee Delivery');
    expect(logo).toBeInTheDocument();

    // Assert that the location is rendered
    const location = screen.getByText('Vinhedo, SP');
    expect(location).toBeInTheDocument();

    // Assert that the shopping cart icon is rendered
    const shoppingCartIcon = screen.getByTestId('shopping-cart');
    expect(shoppingCartIcon).toBeInTheDocument();
  });

  // Shopping cart with a large number of items displays correctly
  it('should display the correct number of items in the shopping cart', () => {
    // Mock the useShoppingCart hook
    vi.mock('~/context/ShoppingCart', () => ({
      useShoppingCart: vi.fn(() => ({
        shoppingCart: {
          coffee: [1, 2, 3] // Mocking a large number of items in the shopping cart
        }
      }))
    }));

    renderWithRouter(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    // Assert that the correct number of items is displayed in the shopping cart
    const shoppingCartIcon = screen.getByTestId('shopping-cart');
    const notificationBadge = screen.getByText('3');
    expect(shoppingCartIcon).toContainElement(notificationBadge);
  });


  // Clicking on shopping cart icon navigates to checkout page if there are items in the shopping cart
  it('should navigate to the checkout page when there are items in the shopping cart', () => {
    // Mock the useShoppingCart and useNavigate hooks
    vi.mock('~/context/ShoppingCart', () => ({
      useShoppingCart: vi.fn(() => ({
        shoppingCart: {
          coffee: [1, 2, 3] // Mocking items in the shopping cart
        }
      }))
    }));

    renderWithRouter(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    // Click on the shopping cart icon
    const shoppingCartIcon = screen.getByTestId('shopping-cart');
    fireEvent.click(shoppingCartIcon);

    // Assert that the navigate function is called with the correct path
    expect(navigate).toHaveBeenCalledWith('/checkout');
  });
});
