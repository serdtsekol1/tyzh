import Layout from '../../components/layout'
import Head from 'next/head'
import PhotoReportTemplate from "../../components/photo_reports/PhotoReportTemplate";

import SkeletonPublication from "../../components/loading_skeletons/SkeletonPublication";

export default function Gallery({ data }) {
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div>
        <PhotoReportTemplate photoReport={data}/>
      </div>
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