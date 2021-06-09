import Layout from '../../components/layout';
import Head from 'next/head';
import { useRouter } from 'next/router';


export default function Tag({tag}) {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>{router.query.tag}</title>
        <link rel="canonical" href={`https://tyzhden.ua/Tag/${router.query.tag}`}/>
        <meta name="title" content={`Усі матеріали за тегом: ${router.query.tag}`}/>
        <meta name="description" content={`Усі матеріали за тегом: ${router.query.tag}`}/>
        <meta id="ctl00_meta2" name="keywords" content={`${router.query.tag}`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://tyzhden.ua/Tag/${router.query.tag}`}/>
        <meta property="og:title" content={`Усі матеріали за тегом: ${router.query.tag}`}/>
        <meta property="og:description" content={`Усі матеріали за тегом: ${router.query.tag}`}/>
        <meta property="twitter:card" content="summary"/>
        <meta property="twitter:url" content={`https://tyzhden.ua/Tag/${router.query.tag}}`}/>
        <meta property="twitter:title" content={`Усі матеріали за тегом: ${router.query.tag}`}/>
        <meta property="twitter:description" content={`Усі матеріали за тегом: ${router.query.tag}`}/>
        <meta property="og:image" content="https://tyzhden.ua/sharing_image.jpg"/>
        <meta property="twitter:image" content="https://tyzhden.ua/sharing_image.jpg"/>
        <meta property="fb:app_id" content="966242223397117"/>
        
    
      </Head>
    </Layout>
  )
}

