import Head from 'next/head'
import Layout from '../../components/layout'
import ArticleTemplate from "../../components/articles/ArticleTemplate";

export default function Post({ data, context }) {
  return (
    <Layout >
      <Head>
        <title>{data.title}</title>
        <link rel="canonical" href={`https://tyzhden.ua/${data.journal.persistentname}/${data.id}`}/>
        <meta name="title" content={data.title}/>
        <meta name="description" content={data.abstract}/>
        <meta id="ctl00_meta2" name="keywords" content={data.tags}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://tyzhden.ua/${data.journal.persistentname}/${data.id}`}/>
        <meta property="og:title" content={data.title}/>
        <meta property="og:description" content={data.abstract}/>
        <meta property="og:image" content={data.image1}/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={`https://tyzhden.ua/${data.journal.persistentname}/${data.id}`}/>
        <meta property="twitter:title" content={data.title}/>
        <meta property="twitter:description" content={data.abstract}/>
        <meta property="twitter:image" content={data.image1}/>
        <meta property="fb:app_id" content="966242223397117"/>

      </Head>
      <div>
        <ArticleTemplate article={data}/>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  let apiUrl = `${process.env.apiDomain}/publications/${context.params.id}/`
  const res = await fetch(apiUrl)
  if (res.status == 200) {
    const data = await res.json();
    return { props: { data }
 }
  } else {
    return { notFound: true }
  }
}
