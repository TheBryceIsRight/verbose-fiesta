import { AppProps } from 'next/app'
import '../styles/index.css'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import Header from '../components/header';

export let theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#16274C',
    },
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

theme = responsiveFontSizes(theme)

export default function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <Header/>
    <Component {...pageProps} />
  </ThemeProvider>
}
