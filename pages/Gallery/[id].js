import Layout from '../../components/layout'
import Head from 'next/head'


export default function Gallery({ data }) {
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
    </Layout>
  )
}


export async function getServerSideProps(context) {
  let apiUrl = `${process.env.apiDomain}/galleries/${context.params.id}/`
  const res = await fetch(apiUrl)
  if (res.status == 200) {
    const data = await res.json()
    return { props: { data } }
  } else {
    return { notFound: true }
  }
}
