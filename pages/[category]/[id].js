import Head from 'next/head'
import Layout from '../../components/layout'
import ArticleTemplate from "../../components/articles/ArticleTemplate";

export default function Post({ data, context }) {
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div>
        <ArticleTemplate article={data}/>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  let apiUrl = `${process.env.apiDomain}/publications/${context.params.id}/`
  const res = await fetch(apiUrl)
  if (res.status == 200) {
    const data = await res.json()
    return { props: { data } }
  } else {
    return { notFound: true }
  }
}
