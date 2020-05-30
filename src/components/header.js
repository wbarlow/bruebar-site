import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `0`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        textAlign: `center`,
        padding: `1.25rem 1.0875rem`, 
        color: `blue`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#474747`,
            textDecoration: `none`,
            fontFamily: `Modak`,
            fontWeight: 100,
            fontSize: `3rem`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
