import '../styles/globals.css'
import { ChakraProvider,Box } from '@chakra-ui/react'
import HookForm from './contact'
//import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {


  return (
    <ChakraProvider>

      <Component {...pageProps} />
    </ChakraProvider>

  )
}

export default MyApp
