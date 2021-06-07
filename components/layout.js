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
        <title>Аналітика, безпека, економіка, міжнародна політика, культура. Зміст має значення!</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta property="fb:app_id" content="966242223397117"/>
     
        <link rel="canonical" href="https://tyzhden.ua"/>
        
        <meta name="title" content="Аналітика, безпека, економіка, міжнародна політика, культура. Зміст має значення!"/>
        <meta name="description" content="Сайт журналу &laquo;Український тиждень&raquo;. Формуємо порядок денний разом"/>
        <meta id="ctl00_meta2" name="keywords" content= "Аналітика, безпека, економіка, міжнародна політика, культура"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://tyzhden.ua`}/>
        <meta property="og:title" content="Аналітика, безпека, економіка, міжнародна політика, культура. Зміст має значення!"/>
        <meta property="og:description" content="Сайт журналу &laquo;Український тиждень&raquo;. Формуємо порядок денний разом"/>
        <meta property="og:image" content="https://tyzhden.ua/sharing_image.jpg"/>
        <meta property="twitter:card" content="summary"/>
        <meta property="twitter:url" content={`https://tyzhden.ua`}/>
        <meta property="twitter:title" content="Аналітика, безпека, економіка, міжнародна політика, культура. Зміст має значення!"/>
        <meta property="twitter:description" content="Сайт журналу &laquo;Український тиждень&raquo;. Формуємо порядок денний разом"/>
        <meta property="twitter:image" content="https://tyzhden.ua/sharing_image.jpg"/>
      </Head>
      <Navbar />
      <div className="main-content">
        {children}
      </div>
      <Footer />
    </div>
  )
}
