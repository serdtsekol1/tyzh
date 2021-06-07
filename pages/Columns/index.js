import Head from 'next/head'

import Layout from '../../components/layout'
import ColumnListTemplate from '../../components/columns/ColumnListTemplate'


export default function ColumnList({ data }) {
  return (
    <Layout>
      <Head>
        <title>Думки впливових людей, колонки закордонних експертів</title>
        <link rel="canonical" href={`https://tyzhden.ua/Columns`}/>
        
        <meta name="title" content="Думки впливових людей, колонки закордонних експертів"/>
        <meta name="description" content="Думки впливових людей, колонки закордонних експертів"/>
        <meta id="ctl00_meta2" name="keywords" content="Думки впливових людей, колонки закордонних експертів"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://tyzhden.ua/Columns`}/>
        <meta property="og:title" content="Думки впливових людей, колонки закордонних експертів"/>
        <meta property="og:description" content="Думки впливових людей, колонки закордонних експертів"/>
        <meta property="og:image" content="https://tyzhden.ua/sharing_image.jpg"/>
        <meta property="twitter:card" content="summary"/>
        <meta property="twitter:url" content={`https://tyzhden.ua/Columns`}/>
        <meta property="twitter:title" content="Думки впливових людей, колонки закордонних експертів"/>
        <meta property="twitter:description" content="Думки впливових людей, колонки закордонних експертів"/>
        <meta property="twitter:image" content="https://tyzhden.ua/sharing_image.jpg"/>
      </Head>
      <div>
        <ColumnListTemplate articles={data}/>
      </div>
    </Layout>
  )
}


function getListApiUrl(context, limit) {
  let page = 1
  if (context.query.page) {
    page = context.query.page
  }
  let offset = (page-1)*limit
  let apiUrl = `${process.env.apiDomain}/columns/?limit=${limit}&offset=${offset}`
  return encodeURI(apiUrl)
}


export async function getServerSideProps(context) {
  const apiUrl = getListApiUrl(context, 10)
  const res = await fetch(apiUrl)
  if (res.status == 200) {
    const data = await res.json()
    return { props: { data } }
  }
  return { notFound: true }
}
