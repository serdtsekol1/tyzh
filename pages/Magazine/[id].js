import Head from 'next/head'
import Layout from '../../components/layout'
import JournalPage from '../../components/journals/JournalTemplate.js'


export default function Magazine({ data }) {
  return (
    <Layout>
      <Head>
        <title>Український тиждень № {data.localnum} ({data.num})</title>
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
