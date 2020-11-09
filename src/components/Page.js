// import PropTypes from "prop-types"
import React from "react"
import NavBar from "./NavBar"

const Page = ({ children }) => {
  return (
    <div>
      <NavBar />

      <div>{children}</div>
    </div>
  )
}

Page.propTypes = {
  // : PropTypes.string
}

export default Page
