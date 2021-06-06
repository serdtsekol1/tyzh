import Head from 'next/head'

import Layout from '../../components/layout'
import GalleryListTemplate from '../../components/photo_reports/GalleryListTemplate'


export default function GalleryList({ data }) {
  return (
    <Layout>
      <Head>
        <title>Фоторепортажі, фотогалереї, фото дня</title>
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
  let apiUrl = `${process.env.apiDomain}/galleries/?limit=${limit}&offset=${offset}`
  console.log(apiUrl)
  return encodeURI(apiUrl)
}


export async function getServerSideProps(context) {
  const apiUrl = getListApiUrl(context, 11)
  const res = await fetch(apiUrl)
  if (res.status == 200) {
    const data = await res.json()
    return { props: { data } }
  }
  return { notFound: true }
}
