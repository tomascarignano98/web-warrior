import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import * as styles from "../styles/project-details.module.css"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, slug, featured } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <h1>{title}</h1>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage image={getImage(featured)} />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsDetails($slug: String = "") {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        stack
        title
        featured {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
