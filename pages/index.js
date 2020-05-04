import Head from 'next/head'
import Link from 'next/link'

// style imports
import utilStyles from '../styles/utils.module.css'
import indexStyles from './index.module.css'

// component imports
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'

// data fetching imports
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>A software engineer skilled in React and Rails; passionate about building tech products that have a great impact on people's lives.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Connect</h2>
        <ul className={indexStyles.listInline}>
          <li>
            <a href="https://github.com/gohyifan" target="_blank">
              <i className="fab fa-github-square"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/imgyf" target="_blank">
              <i className="fab fa-twitter-square"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/gohyifan/" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
