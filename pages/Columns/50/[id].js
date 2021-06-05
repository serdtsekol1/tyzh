import Head from 'next/head'

import Layout from '../../../components/layout'
import ColumnTemplate from "../../../components/columns/ColumnTemplate";


export default function Column({ data }) {
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div>
        <ColumnTemplate columnItem={data}/>
      </div>
    </Layout>
  )
}


export async function getServerSideProps(context) {
  let apiUrl = `${process.env.apiDomain}/columns/${context.params.id}/`
  const res = await fetch(apiUrl)
  if (res.status == 200) {
    const data = await res.json()
    return { props: { data } }
  } else {
    return { notFound: true }
  }
}
