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
    
      </Head>
      <Navbar />
      <div className="main-content">
        {children}
      </div>
      <Footer />
    </div>
  )
}
