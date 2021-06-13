import Head from 'next/head'

import useSWR from 'swr'

import Layout from '../../../components/layout'
import ColumnTemplate from "../../../components/columns/ColumnTemplate";


export default function Column({ initialData, apiUrl }) {
  const fetcher = url => fetch(url).then(res => res.json())
  const { data } = useSWR(apiUrl, fetcher, { initialData, refreshInterval: 90000 })

  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
        <link rel="canonical" href={`https://tyzhden.ua/Columns/50/${data.id}`}/>
        <meta name="title" content={data.title}/>
        <meta name="description" content={data.abstract}/>
        <meta id="ctl00_meta2" name="keywords" content={data.tags}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://tyzhden.ua/Columns/50/${data.id}`}/>
        <meta property="og:title" content={data.title}/>
        <meta property="og:description" content={data.abstract}/>
        <meta property="og:image" content={data.author.image1url}/>
        <meta property="twitter:card" content="summary"/>
        <meta property="twitter:url" content={`https://tyzhden.ua/Columns/50/${data.id}`}/>
        <meta property="twitter:title" content={data.title}/>
        <meta property="twitter:description" content={data.abstract}/>
        <meta property="twitter:image" content={data.author.image1url}/>
        <meta property="fb:app_id" content="966242223397117"/>
      </Head>
      <div>
        <ColumnTemplate columnItem={data}/>
      </div>
    </Layout>
  )
}


export async function getServerSideProps(context) {
  let apiUrl = `${process.env.apiDomain}/columns/${context.params.id}/`
  const res = await fetch(apiUrl)
  if (res.status == 200) {
    const initialData = await res.json();
    return { props: { initialData, apiUrl }}
  } else {
    return { notFound: true }
  }
}
