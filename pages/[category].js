import Layout from '../components/layout'
import categoriesData from "../components/common/categories.json"
import Head from 'next/head'

export default function Post({ data }) {
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
    </Layout>
  )
}


function getListApiUrl(context, limit) {
  // fix offset and pages
  let page = 1
  let offset = (page-1)*limit
  let apiUrl = "https://tyzhden.ua/api/publications/"
  const category = context.params.category
  const categories = categoriesData.map(item => item["category_id"])

  if (category === "Publications") {
    apiUrl += `?limit=${limit}&offset=${offset}`
  } else if (categories.includes(category)){
    const categoryName = categoriesData.find(item => {
      console.log(item.category_id, category)
      return item.category_id === category;
    }
    ).category_name
    console.log(categoryName)
    apiUrl += `list/${categoryName}/?limit=${limit}&offset=${offset}`;
  } else {
    apiUrl = ""
  }
  return encodeURI(apiUrl)
}

export async function getServerSideProps(context) {
  const apiUrl = getListApiUrl(context, 11)
  if (apiUrl) {
    const res = await fetch(apiUrl)
    if (res.status == 200) {
      const data = await res.json()
      return { props: { data } }
    }
  }
  return { notFound: true }
}
