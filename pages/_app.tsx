import '../styles/globals.scss'
// import '../components/common/css/_all.scss'
import './index.scss'
import type { AppProps } from 'next/app'

import "bootstrap/dist/css/bootstrap.css";


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
