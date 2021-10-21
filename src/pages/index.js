import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata
  console.log(title)
  console.log(description)

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h1>Design</h1>
          <h2>Develop & Deploy</h2>
          <p>UX designer & and web devloper based in Manchester.</p>
          <Link to="/projects" className={styles.btn}>
            My Portfolio Projects
          </Link>
        </div>
        <img src="/banner.png" alt="" style={{ maxWidth: "100%" }} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        title
        description
        copyright
      }
    }
  }
`
