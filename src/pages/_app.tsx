import {AppProps} from 'next/app'
import { GlobalStyle } from "../styles/global";
import { Context, ContextProvider } from "../hooks/Context"
import "leaflet/dist/leaflet.css"

function MyApp({ Component, pageProps }: AppProps) {
  return(
      <ContextProvider>

            <GlobalStyle />
            <Component {...pageProps} />

      </ContextProvider>

  ) 
}

export default MyApp
