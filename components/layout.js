import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"


export default function Layout({ children }) {
  return (
    <div className="App">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-51335057-1"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-51335057-1', { page_path: window.location.pathname });
            `,
          }}
        />

        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PK9HWTL');`}}></script>
    
      </Head>
      <Navbar />
      <div className="main-content">
        {children}
      </div>
      <Footer />
    </div>
  )
}
