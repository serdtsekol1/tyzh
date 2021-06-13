import Head from 'next/head'
import { useRouter } from 'next/router';

import Layout from '../components/layout'
import categoriesData from "../components/common/categories.json"
import ArticleListTemplate from '../components/articles/ArticleListTemplate'


export default function PostList({ data, category,page }) {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>{category.name}</title>
     
        <link rel="canonical" href={`https://tyzhden.ua/${router.query.category}`}/>
        <meta name="title" content="Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі"/>
        <meta name="description" content="Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі"/>
        <meta id="ctl00_meta2" name="keywords" content={`${router.query.category}`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://tyzhden.ua/${router.query.category}`}/>
        <meta property="og:title" content="Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі"/>
        <meta property="og:description" content="Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі"/>
        <meta property="twitter:card" content="summary"/>
        <meta property="twitter:url" content={`https://tyzhden.ua/${router.query.category}`}/>
        <meta property="twitter:title" content="Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі"/>
        <meta property="twitter:description" content="Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі"/>
        <meta property="og:image" content="https://tyzhden.ua/sharing_image.jpg"/>
        <meta property="twitter:image" content="https://tyzhden.ua/sharing_image.jpg"/>
        <meta property="fb:app_id" content="966242223397117"/>

      </Head>
      <div>
        <ArticleListTemplate page={page} articles={data} category={category}/>
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
  console.log("getApi",page);
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
  const page = context.query.page
  if (category) {
    const apiUrl = getListApiUrl(context, 11, category)
    const res = await fetch(apiUrl)
    if (res.status == 200) {
      const data = await res.json()
      return { props: { data, category,page } }
    }
  }
  return { notFound: true }
}
