import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex md:flex-row flex-col">
        <div className="mb-16 md:mb-0">
          <Header/>
        </div>
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
