import { AppProps } from 'next/app'
import '../styles/index.css'
import { ThemeProvider, createTheme, responsiveFontSizes, useTheme } from '@mui/material/styles';
import Header from '../components/header';
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteMode } from '@mui/material';
import { useState, useMemo, createContext, useContext } from 'react';
import { AppPropsType } from 'next/dist/shared/lib/utils';
import { LanguageProvider } from '../contexts/LanguageContext';


export const ColorModeContext = createContext({ toggleColorMode: () => { } });

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: {
          main: '#fff',
        },
        secondary: {
          main: '#16274C',
        },
        background: {
          default: '#fff',
        },
      }
      : {
        // palette values for dark mode
        primary: {
          main: '#1A1A1A',
        },
        secondary: {
          main: '#fff',
        },
        background: {
          default: '#1A1A1A',
        },
      }),
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});


export default function App({ Component, pageProps, router }: AppPropsType) {
  let theme = useTheme();
  const colorContext = useContext(ColorModeContext);
  const [mode, setMode] = useState<PaletteMode>('light');
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  theme = responsiveFontSizes(theme)

  return <LanguageProvider>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} key={router.route} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  </LanguageProvider>
}
