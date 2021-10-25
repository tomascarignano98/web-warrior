import React from "react"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import * as styles from "../styles/project-details.module.css"

export default function ProjectDetails() {
  return (
    <Layout>
      <div className={styles.details}>
        <h1>Title</h1>
        <h3>stack</h3>
        <div className={styles.featured}>
          {/* <GatsbyImage image={getImage} /> */}
        </div>
        {/* <div className={styles.html} dangerouslySetInnerHTML={}/> */}
      </div>
    </Layout>
  )
}
