import '../styles/globals.scss'
// import '../components/common/css/_all.scss'
import './index.scss'
import {useEffect} from 'react'
import type { AppProps } from 'next/app'

import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const handleRouteChange = (url: URL) => {
      window.gtag('config', 'UA-51335057-1', {
          page_path: url,
      });
  };

  useEffect(() => {
      router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
          router.events.off('routeChangeComplete', handleRouteChange);
      };
  }, [router.events]);

  return <Component {...pageProps} />
}

export default MyApp
