import { AppProps } from 'next/app'
import '../styles/index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from '../components/header';
import { green, purple } from '@mui/material/colors';


export const theme = createTheme({
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

export default function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <Header/>
    <Component {...pageProps} />
  </ThemeProvider>
}
