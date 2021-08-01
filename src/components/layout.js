import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import { AnimatePresence } from "framer-motion"

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex md:flex-row flex-col">
        <Header/>
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
