import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer className="global-footer">
        <a
          href="https://www.gatsbyjs.com/"
          title="Built with Gatsby"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../../Gatsby_Monogram.png"
            class="footer-img"
            alt="Gatsby"
          />
        </a>
        <a
          href="https://www.netlify.com/"
          title="Hosted by Netlify"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../../netlify-logo.png" class="footer-img" alt="Netlify" />
        </a>
      </footer>
    </div>
  )
}

export default Layout
