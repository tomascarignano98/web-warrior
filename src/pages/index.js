import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
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
        <StaticImage src="../images/banner.png" alt="" placeholder="none" />
      </section>
    </Layout>
  )
}
