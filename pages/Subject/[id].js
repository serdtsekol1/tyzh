import Head from 'next/head'
import Layout from '../../components/layout'
import SubjectTemplate from "../../components/subjects/SubjectTemplate";


export default function Subject({ data }) {
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div>
        <SubjectTemplate subject={data}/>
      </div>
    </Layout>
  )
}


export async function getServerSideProps(context) {
  let apiUrl = `${process.env.apiDomain}/subjects/${context.params.id}/`
  const res = await fetch(apiUrl)
  if (res.status == 200) {
    const data = await res.json()
    return { props: { data } }
  } else {
    return { notFound: true }
  }
}
