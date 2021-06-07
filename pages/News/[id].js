import Head from 'next/head'

import Layout from '../../components/layout'
import NewsTemplate from "../../components/news/NewsTemplate";


export default function News({ data }) {
  return (
    <Layout>
      <Head>
  
        <title>{data.title}</title>
        <link rel="canonical" href={`https://tyzhden.ua/News/${data.id}`}/>
        <meta name="title" content={data.title}/>
        <meta name="description" content={data.abstract}/>
        <meta id="ctl00_meta2" name="keywords" content={data.tags}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://tyzhden.ua/News/${data.id}`}/>
        <meta property="og:title" content={data.title}/>
        <meta property="og:description" content={data.abstract}/>
     
        <meta property="twitter:card" content="summary"/>
        <meta property="twitter:url" content={`https://tyzhden.ua/News/${data.id}`}/>
        <meta property="twitter:title" content={data.title}/>
        <meta property="twitter:description" content={data.abstract}/>
       
      </Head>
      <div>
        <NewsTemplate newsItem={data}/>
      </div>
    </Layout>
  )
}


export async function getServerSideProps(context) {
  let apiUrl = `${process.env.apiDomain}/news/${context.params.id}/`
  const res = await fetch(apiUrl)
  if (res.status == 200) {
    const data = await res.json()
  
    return { props: { data } }
  } else {
    return { notFound: true }
  }
}
