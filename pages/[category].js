import Head from 'next/head'

import Layout from '../components/layout'
import categoriesData from "../components/common/categories.json"
import ArticleListTemplate from '../components/articles/ArticleListTemplate'


export default function Post({ data, category }) {
  return (
    <Layout>
      <Head>
        <title>Статті</title>
      </Head>
      <div>
        <ArticleListTemplate articles={data} category={category}/>
      </div>
    </Layout>
  )
}


function getCategory(category) {
  const categories = categoriesData.map(item => item["category_id"])
  if (category === "Publications"){
    return {slug: category, name: "Статті"}
  } else if (categories.includes(category)) {
    const categoryName = categoriesData.find(item => {
      return item.category_id === category;
    }).category_name
    return {slug: category, name: categoryName}
  }
  return false
}


function getListApiUrl(context, limit, category) {
  let page = 1
  if (context.query.page) {
    page = context.query.page
  }
  let offset = (page-1)*limit
  let apiUrl = "https://tyzhden.ua/api/publications/"

  if (category.slug === "Publications") {
    apiUrl += `?limit=${limit}&offset=${offset}`
  } else {
    apiUrl += `list/${category.name}/?limit=${limit}&offset=${offset}`;
  }
  return encodeURI(apiUrl)
}


export async function getServerSideProps(context) {
  const category = getCategory(context.params.category)
  if (category) {
    const apiUrl = getListApiUrl(context, 10, category)
    const res = await fetch(apiUrl)
    if (res.status == 200) {
      const data = await res.json()
      return { props: { data, category } }
    }
  }
  return { notFound: true }
}
