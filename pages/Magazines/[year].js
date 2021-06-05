import Layout from '../../components/layout'
import Head from 'next/head'


export default function MagazineYear({ data }) {
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
    </Layout>
  )
}


export async function getServerSideProps(context) {
  let apiUrl = `${process.env.apiDomain}/magazines/year/${context.params.year}/?limit=60`
  const res = await fetch(apiUrl)
  if (res.status == 200) {
    const data = await res.json()
    return { props: { data } }
  }
  return { notFound: true }
}
