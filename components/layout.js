import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"


export default function Layout({ children }) {
  return (
    <div>
    <Head>
    <title>Test Next</title>
    </Head>
    <Navbar />
    <div>
    {children}
    </div>
    <Footer />
    </div>
  )
}
