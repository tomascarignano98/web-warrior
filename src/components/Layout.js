import React from "react"

import Navbar from "./Navbar"

function Layout({ children }) {
  return (
    <div className="layout">
      <header role="banner">
        <Navbar />
      </header>
      <main className="content">{children}</main>
      <footer>
        <p>Copyright 2021 Web Warrior</p>
      </footer>
    </div>
  )
}

export default Layout
