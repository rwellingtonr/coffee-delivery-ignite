import { GlobalStyle } from "~/styles/globas"
import { defaultTheme } from "~/styles/theme"
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components'

type ThemeProviderProps = {
  children: React.ReactElement
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <StyledComponentThemeProvider theme={defaultTheme}>
    {children}
    <GlobalStyle />
  </StyledComponentThemeProvider>
)
