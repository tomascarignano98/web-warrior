import React from "react"
import { Link } from "gatsby"

function Navbar() {
  return (
    <nav>
      <span className="brand-logo">Web Warrior</span>
      <ul className="links">
        <li>
          <Link exact to="/">
            Home
          </Link>
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
