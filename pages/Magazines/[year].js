import Layout from '../../components/layout'
import Head from 'next/head'
import JournalsList from "../../components/journals/JournalsList";
import { useRouter } from 'next/router'
import YearsNavBar from "../../components/journals/YearsNavBar";
import MetaTags from "../../components/common/MetaTagsComponent";


export default function MagazineYear({ data }) {

  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Журнали</title>
      </Head>
      <div>
        <MetaTags title={"Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн"}
                  abstract={"Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн"}
                  ct100={true} keywords={"Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн"}
        />
        <YearsNavBar/>
        <JournalsList year={router.query.year}/>
        {/*<Route path={"/Magazines/:year"} component={JournalsList} />*/}
      </div>
    </Layout>
  )
}


export async function getServerSideProps(context) {
  let apiUrl = `${process.env.apiDomain}/magazines/year/${context.params.year}/?limit=60`
  const res = await fetch(apiUrl)
  if (res.status == 200) {
    const data = await res.json()
    return { props: { data } }
  }
  return { notFound: true }
}
