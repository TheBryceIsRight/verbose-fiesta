import { AppProps } from 'next/app'
import '../styles/index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
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
  return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
}
