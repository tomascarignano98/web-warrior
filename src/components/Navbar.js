import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata

  return (
    <nav>
      <span className="brand-logo">{title}</span>
      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Portfolio Projects</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
