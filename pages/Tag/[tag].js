import Layout from '../../components/layout'
import Head from 'next/head'


export default function Tag({tag}) {
  return (
    <Layout>
      <Head>
        <title>Тег</title>
        <link rel="canonical" href={`https://tyzhden.ua/Gallery/${data.id}`}/>
        <meta name="title" content={`Усі матеріали за тегом: ${tag}`}/>
        <meta name="description" content={`Усі матеріали за тегом: ${tag}`}/>
        <meta id="ctl00_meta2" name="keywords" content={`${tag}`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://tyzhden.ua/Tag/${tag}`}/>
        <meta property="og:title" content={`Усі матеріали за тегом: ${tag}`}/>
        <meta property="og:description" content={`Усі матеріали за тегом: ${tag}`}/>
        <meta property="twitter:card" content="summary"/>
        <meta property="twitter:url" content={`https://tyzhden.ua/Tag/${tag}`}/>
        <meta property="twitter:title" content={`Усі матеріали за тегом: ${tag}`}/>
        <meta property="twitter:description" content={`Усі матеріали за тегом: ${tag}`}/>
    
      </Head>
    </Layout>
  )
}

