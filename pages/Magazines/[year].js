import Layout from '../../components/layout'
import Head from 'next/head'


export default function MagazineYear({ data, year }) {
  return (
    <Layout>
      <Head>
    
        <title>Випуски журналу &laquo;Український тиждень&raquo;</title>
        <link rel="canonical" href={`https://tyzhden.ua/Magazines/${year}`}/>
        <meta name="title" content={`Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн`}/>
        <meta name="description" content={`Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн`}/>
        
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://tyzhden.ua/Magazines/${year}`}/>
        <meta property="og:title" content={`Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн`}/>
        <meta property="og:description" content={`Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн`}/>
     
        <meta property="twitter:card" content="summary"/>
        <meta property="twitter:url" content={`https://tyzhden.ua/Magazines/${year}`}/>
        <meta property="twitter:title" content={`Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн`}/>
        <meta property="twitter:description" content={`Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн`}/>

      </Head>
    </Layout>
  )
}


export async function getServerSideProps(context) {
  let apiUrl = `${process.env.apiDomain}/magazines/year/${context.params.year}/?limit=60`
  const res = await fetch(apiUrl)
  if (res.status == 200) {
    const data = await res.json()
    return { props: { data:data, year: context.params.year } }
  }
  return { notFound: true }
}
