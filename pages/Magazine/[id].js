import Layout from '../../components/layout'
import Head from 'next/head'

export default function Magazine({ data }) {
  return (
    <Layout>
      <Head>
        <title>Журнал №{data.localnum} ({data.num})</title>
      </Head>
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
