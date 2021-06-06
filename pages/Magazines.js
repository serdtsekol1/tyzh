import Layout from '../components/layout'
import Head from 'next/head'
import JournalsList from "../components/journals/JournalsList";

import YearsNavBar from "../components/journals/YearsNavBar";
import MetaTags from "../components/common/MetaTagsComponent";


export default function Magazines() {
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
        <Route path={"/Magazines/:year"} component={JournalsList} />
      </div>
    </Layout>
  )
}
