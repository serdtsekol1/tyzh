import Head from 'next/head'
import { useRouter } from 'next/router';

import Layout from '../components/layout'
import categoriesData from "../components/common/categories.json"
import ArticleListTemplate from '../components/articles/ArticleListTemplate'


export default function PostList({ data, category }) {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>{category.name}</title>
     
        <link rel="canonical" href={`https://tyzhden.ua/${router.querycategory}`}/>
        <meta name="title" content={`Усі матеріали за тегом: ${router.query.tag}`}/>
        <meta name="description" content={`Усі матеріали за тегом: ${router.query.tag}`}/>
        <meta id="ctl00_meta2" name="keywords" content={`${router.query.tag}`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://tyzhden.ua/${router.querycategory}`}/>
        <meta property="og:title" content={`Усі матеріали за тегом: ${router.query.tag}`}/>
        <meta property="og:description" content={`Усі матеріали за тегом: ${router.query.tag}`}/>
        <meta property="twitter:card" content="summary"/>
        <meta property="twitter:url" content={`https://tyzhden.ua/${router.querycategory}}`}/>
        <meta property="twitter:title" content={`Усі матеріали за тегом: ${router.query.tag}`}/>
        <meta property="twitter:description" content={`Усі матеріали за тегом: ${router.query.tag}`}/>
        <meta property="og:image" content="https://tyzhden.ua/sharing_image.jpg"/>
        <meta property="twitter:image" content="https://tyzhden.ua/sharing_image.jpg"/>
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

  let apiUrl = `${process.env.apiDomain}/publications/`

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
    const apiUrl = getListApiUrl(context, 11, category)
    const res = await fetch(apiUrl)
    if (res.status == 200) {
      const data = await res.json()
      return { props: { data, category } }
    }
  }
  return { notFound: true }
}
