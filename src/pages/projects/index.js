import { graphql, Link } from "gatsby"
import React from "react"

import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"

function Projects({ data }) {
  const projectsArr = data.allMarkdownRemark.nodes
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
      </section>
    </Layout>
  )
}

export default Projects

// export page query
export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
  }
`
