import Layout from '../../../components/layout'
import Head from 'next/head'


export default function AuthorColumn({ data }) {
  return (
    <Layout>
      <Head>
        <title>{data.fullname2ua}</title>
      </Head>
    </Layout>
  )
}


export async function getServerSideProps(context) {
  let apiUrl = `${process.env.apiDomain}authors/page/${context.params.id}/`
  const res = await fetch(apiUrl)
  if (res.status == 200) {
    const data = await res.json()
    return { props: { data } }
  } else {
    return { notFound: true }
  }
}
