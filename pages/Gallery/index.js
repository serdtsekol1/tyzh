import Head from 'next/head'

import Layout from '../../components/layout'
import GalleryListTemplate from '../../components/photo_reports/GalleryListTemplate'


export default function GalleryList({ data }) {
  return (
    <Layout>
      <Head>
        <title>Фоторепортажі, фотогалереї, фото дня</title>
        <link rel="canonical" href={`https://tyzhden.ua/Gallery`}/>
        
        <meta name="title" content="Фоторепортажі, фотогалереї, фото дня, новини у фото, подорожі у фото"/>
        <meta name="description" content="Фоторепортажі, фотогалереї, фото дня, новини у фото, подорожі у фото"/>
        <meta id="ctl00_meta2" name="keywords" content="Фоторепортажі, фотогалереї, фото дня, новини у фото, подорожі у фото"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://tyzhden.ua/Gallery`}/>
        <meta property="og:title" content="Фоторепортажі, фотогалереї, фото дня, новини у фото, подорожі у фото"/>
        <meta property="og:description" content="Фоторепортажі, фотогалереї, фото дня, новини у фото, подорожі у фото"/>
        <meta property="og:image" content="https://tyzhden.ua/sharing_image.jpg"/>
        <meta property="twitter:card" content="summary"/>
        <meta property="twitter:url" content={`https://tyzhden.ua/Gallery`}/>
        <meta property="twitter:title" content="Фоторепортажі, фотогалереї, фото дня, новини у фото, подорожі у фото"/>
        <meta property="twitter:description" content="Фоторепортажі, фотогалереї, фото дня, новини у фото, подорожі у фото"/>
        <meta property="twitter:image" content="https://tyzhden.ua/sharing_image.jpg"/>
      </Head>
      <div>
        <GalleryListTemplate articles={data}/>
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
  let apiUrl = `${process.env.apiDomain}/galleries/?limit=${limit}&offset=${offset}`;
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
