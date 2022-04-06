import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource/nunito'
import '@fontsource/nunito/400.css'
import '@fontsource/nunito/500.css'
import '@fontsource/nunito/600.css'
const theme = extendTheme({
  fonts: {
    heading: 'nunito, sans-serif',
    body: 'nunito, sans-serif',
  },
  colors: {
    brand: '#F2F9FE',
  },
})
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
