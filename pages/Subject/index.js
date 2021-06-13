import Head from 'next/head'

import Layout from '../../components/layout'
import Subjects from '../../components/subjects/Subjects'


export default function GalleryList({ data }) {
  return (
    <Layout>
      <Head>
        <title>Головні теми</title>
        <link rel="canonical" href={`https://tyzhden.ua/Subject`}/>
        <meta name="title" content="Головні теми"/>
        <meta name="description" content="Аналітика, оцінки, прогнози"/>
        <meta id="ctl00_meta2" name="keywords" content="Аналітика, оцінки, прогнози"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://tyzhden.ua/Subject`}/>
        <meta property="og:title" content="Головні теми"/>
        <meta property="og:description" content="Аналітика, оцінки, прогнози"/>
        <meta property="og:image" content="https://tyzhden.ua/sharing_image.jpg"/>
        <meta property="twitter:card" content="summary"/>
        <meta property="twitter:url" content={`https://tyzhden.ua/Subject`}/>
        <meta property="twitter:title" content="Головні теми"/>
        <meta property="twitter:description" content="Аналітика, оцінки, прогнози"/>
        <meta property="twitter:image" content="https://tyzhden.ua/sharing_image.jpg"/>
        <meta property="fb:app_id" content="966242223397117"/>

      </Head>
      <div>
        <Subjects articles={data}/>
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
  let apiUrl = `${process.env.apiDomain}/subjects/?limit=${limit}&offset=${offset}`;
  return encodeURI(apiUrl)
}


export async function getServerSideProps(context) {
  const apiUrl = getListApiUrl(context, 13)
  const res = await fetch(apiUrl)
  if (res.status == 200) {
    const data = await res.json()
    return { props: { data } }
  }
  return { notFound: true }
}
