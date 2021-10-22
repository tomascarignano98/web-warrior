import { graphql, Link } from "gatsby"
import React from "react"

import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"

function Projects({ data }) {
  // console.log(data)

  const projectsArr = data.projects.nodes
  const contactEmail = data.contact.siteMetadata.contact

  const projects = projectsArr.map(project => (
    <li key={project.id}>
      <Link to={"/projects/" + project.frontmatter.slug}>
        <div>
          <h3>{project.frontmatter.title}</h3>
          <p>{project.frontmatter.stack}</p>
        </div>
      </Link>
    </li>
  ))

  return (
    <Layout>
      <section className={styles.portfolio}>
        <h1>Portfolio</h1>
        <h2>Projects & Websites I've Created</h2>
        <ul className={styles.projects}>{projects}</ul>
        <p>Like what you see? Email me at {contactEmail} for a quote.</p>
      </section>
    </Layout>
  )
}

export default Projects

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
