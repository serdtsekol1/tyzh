import Head from 'next/head'

import Layout from '../../components/layout'
import PressReleaseListTemplate from '../../components/pressreleases/PressReleaseListTemplate'


export default function PressReleaseList({ data }) {
  return (
    <Layout>
      <Head>
       
        <title>Прес-релізи - Український тиждень</title>
        <link rel="canonical" href={`https://tyzhden.ua/PressReleases`}/>
        
        <meta name="title" content="Прес-релізи - Український тиждень"/>
        <meta name="description" content="Прес-релізи - Український тиждень"/>
        <meta id="ctl00_meta2" name="keywords" content="Прес-релізи - Український тиждень"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://tyzhden.ua/Gallery`}/>
        <meta property="og:title" content="Прес-релізи - Український тиждень"/>
        <meta property="og:description" content="Прес-релізи - Український тиждень"/>
        <meta property="og:image" content="https://tyzhden.ua/sharing_image.jpg"/>
        <meta property="twitter:card" content="summary"/>
        <meta property="twitter:url" content={`https://tyzhden.ua/Gallery`}/>
        <meta property="twitter:title" content="Прес-релізи - Український тиждень"/>
        <meta property="twitter:description" content="Прес-релізи - Український тиждень"/>
        <meta property="twitter:image" content="https://tyzhden.ua/sharing_image.jpg"/>
        <meta property="fb:app_id" content="966242223397117"/>

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
