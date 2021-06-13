import Head from 'next/head'

import useSWR from 'swr'

import Layout from '../../components/layout'
import PressreleaseTemplate from "../../components/pressreleases/PressreleaseTemplate"


export default function PressRelease({ initialData, apiUrl }) {
  const fetcher = url => fetch(url).then(res => res.json())
  const { data } = useSWR(apiUrl, fetcher, { initialData, refreshInterval: 90000 })

  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
        <link rel="canonical" href={`https://tyzhden.ua/PressReleases/${data.id}`}/>
        <meta name="title" content={data.title}/>
        <meta name="description" content={data.abstract}/>
        <meta id="ctl00_meta2" name="keywords" content={data.tags}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://tyzhden.ua/PressReleases/${data.id}`}/>
        <meta property="og:title" content={data.title}/>
        <meta property="og:description" content={data.abstract}/>
        <meta property="og:image" content={data.image1}/>
        <meta property="twitter:card" content="summary"/>
        <meta property="twitter:url" content={`https://tyzhden.ua/PressReleases/${data.id}`}/>
        <meta property="twitter:title" content={data.title}/>
        <meta property="twitter:description" content={data.abstract}/>
        <meta property="twitter:image" content={data.image1}/>
        <meta property="fb:app_id" content="966242223397117"/>

      </Head>
      <div>
        <PressreleaseTemplate pressrelease={data}/>
      </div>
    </Layout>
  )
}


export async function getServerSideProps(context) {
  let apiUrl = `${process.env.apiDomain}/pressreleases/${context.params.id}/`
  const res = await fetch(apiUrl)
  if (res.status == 200) {
    const initialData = await res.json();
    return { props: { initialData, apiUrl }}
  } else {
    return { notFound: true }
  }
}
