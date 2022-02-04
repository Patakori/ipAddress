import {AppProps} from 'next/app'
import { GlobalStyle } from "../styles/global";
import { Context, ContextProvider } from "../hooks/Context"
import "leaflet/dist/leaflet.css"

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function MyApp({ Component, pageProps }: AppProps) {
  return(
      <ContextProvider>
            <ToastContainer autoClose={3000} />
            <GlobalStyle />
            <Component {...pageProps} />

      </ContextProvider>

  ) 
}

export default MyApp
