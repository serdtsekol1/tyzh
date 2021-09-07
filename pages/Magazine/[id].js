import Head from 'next/head'
import Layout from '../../components/layout'
import JournalPage from '../../components/journals/JournalTemplate.js'


export default function Magazine({ data }) {
  const metaTitle = !data.double ? `Український тиждень № ${data.localnum} (${data.num})` : `Український тиждень № ${data.localnum}-${data.localnum+1} (${data.num}-${data.num+1})`;
  return (
    <Layout>
      <Head>
        <title>Український тиждень № {data.localnum} ({data.num})</title>
        <link rel="canonical" href={`https://tyzhden.ua/Magazine/${data.id}`}/>
        <meta name="title" content={metaTitle}/>
        <meta name="description" content={metaTitle}/>
        <meta id="ctl00_meta2" name="keywords" content={metaTitle}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://tyzhden.ua/Magazine/${data.id}`}/>
        <meta property="og:title" content={metaTitle}/>
        <meta property="og:description" content={metaTitle}/>
        <meta property="og:image" content={data.image1}/>
        <meta property="twitter:card" content="summary"/>
        <meta property="twitter:url" content={`https://tyzhden.ua/Magazine/${data.id}`}/>
        <meta property="twitter:title" content={metaTitle}/>
        <meta property="twitter:description" content={metaTitle}/>
        <meta property="twitter:image" content={data.image1}/>
        <meta property="fb:app_id" content="966242223397117"/>

      </Head>
      <div>
        <JournalPage journalItem={data}/>
      </div>
    </Layout>
  )
}


export async function getServerSideProps(context) {
  // Fetch data from external API
  let apiUrl = `${process.env.apiDomain}/magazines/${context.params.id}/`
  const res = await fetch(apiUrl)
  if (res.status == 200) {
    const data = await res.json()
    return { props: { data } }
  } else {
    return { notFound: true }
  }
}
