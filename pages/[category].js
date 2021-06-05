import Head from 'next/head'

import Layout from '../components/layout'
import categoriesData from "../components/common/categories.json"
import ArticleListTemplate from '../components/articles/ArticleListTemplate'


export default function Post({ data }) {
  return (
    <Layout>
      <Head>
        <title>Статті</title>
      </Head>
      <div>
        <ArticleListTemplate articles={data}/>
      </div>
    </Layout>
  )
}


function getListApiUrl(context, limit) {
  // fix offset and pages
  let page = 1
  if (context.query.page) {
    page = context.query.page
  }
  let offset = (page-1)*limit
  let apiUrl = "https://tyzhden.ua/api/publications/"
  const category = context.params.category
  const categories = categoriesData.map(item => item["category_id"])

  if (category === "Publications") {
    apiUrl += `?limit=${limit}&offset=${offset}`
  } else if (categories.includes(category)){
    const categoryName = categoriesData.find(item => {
      return item.category_id === category;
    }
    ).category_name
    apiUrl += `list/${categoryName}/?limit=${limit}&offset=${offset}`;
  } else {
    apiUrl = ""
  }
  return encodeURI(apiUrl)
}

export async function getServerSideProps(context) {
  const apiUrl = getListApiUrl(context, 10)
  if (apiUrl) {
    const res = await fetch(apiUrl)
    if (res.status == 200) {
      const data = await res.json()
      return { props: { data } }
    }
  }
  return { notFound: true }
}
