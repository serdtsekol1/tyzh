import Layout from '../components/layout'
import Head from 'next/head'
import JournalsList from "../components/journals/JournalsList";

import YearsNavBar from "../components/journals/YearsNavBar";


export default function Magazines() {
  return (
    <Layout>
      <Head>
        <title>Випуски журналу &laquo;Український тиждень&raquo;</title>
        <link rel="canonical" href={`https://tyzhden.ua/Magazines`}/>
        <meta name="title" content={`Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн`}/>
        <meta name="description" content={`Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://tyzhden.ua/Magazines`}/>
        <meta property="og:title" content={`Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн`}/>
        <meta property="og:description" content={`Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн`}/> 
        <meta property="twitter:card" content="summary"/>
        <meta property="twitter:url" content={`https://tyzhden.ua/Magazines`}/>
        <meta property="twitter:title" content={`Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн`}/>
        <meta property="twitter:description" content={`Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн`}/>
        <meta property="og:image" content="https://tyzhden.ua/sharing_image.jpg"/>
        <meta property="twitter:image" content="https://tyzhden.ua/sharing_image.jpg"/>
        <meta property="fb:app_id" content="966242223397117"/>

      </Head>
      <div>
       
        <YearsNavBar/>
        <Route path={"/Magazines/:year"} component={JournalsList} />
      </div>
    </Layout>
  )
}
