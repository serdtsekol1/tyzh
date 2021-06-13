import React from "react";
import Head from 'next/head'
import Layout from '../components/layout'

export default function FourOhFour() {
  return (
    <Layout>
      <Head>
        <title>Помилка 404</title>
      </Head>
      <div>
        <div className="container">
          <div align="center">
            <img
              align="center"
              style={{ height: "100%", width:"100%", marginBottom: 50 }}
              src={"/images/error-image.svg"}
            />
          </div>
        </div>
      </div>
  </Layout>
  );
}