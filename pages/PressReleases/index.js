import Head from 'next/head'

import Layout from '../../components/layout'
import PressReleaseListTemplate from '../../components/pressreleases/PressReleaseListTemplate'


export default function PressReleaseList({ data }) {
  return (
    <Layout>
      <Head>
        <title>Останні прес-релізи</title>
      </Head>
      <div>
        <PressReleaseListTemplate articles={data}/>
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
  let apiUrl = `${process.env.apiDomain}/pressreleases/?limit=${limit}&offset=${offset}`
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
