import Head from 'next/head'

import Layout from '../../components/layout'
import PressreleaseTemplate from "../../components/pressreleases/PressreleaseTemplate"


export default function PressRelease({ data }) {
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div>
        <PressreleaseTemplate pressrelease={data}/>
      </div>
    </Layout>
  )
}


export async function getServerSideProps(context) {
  let apiUrl = `${process.env.apiDomain}/pressreleases/${context.params.id}/`
  const res = await fetch(apiUrl)
  if (res.status == 200) {
    const data = await res.json()
    return { props: { data } }
  } else {
    return { notFound: true }
  }
}
