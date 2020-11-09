import React from "react"
import { Link } from "gatsby"
// import PropTypes from "prop-types"

import styled from "@emotion/styled"

const ROUTES = [
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/blog",
    name: "Blog",
  },
  {
    path: "/projects",
    name: "Projects",
  },
]

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const NavTitle = styled.h1``

const NavLink = styled(Link)`
  padding: 1rem;
`

const NavBar = () => {
  return (
    <Container>
      <NavTitle>
        <Link to="/">Brad Ryan</Link>
      </NavTitle>

      <div>
        {ROUTES.map(route => (
          <NavLink to={route.path}>{route.name}</NavLink>
        ))}
      </div>
    </Container>
  )
}

NavBar.propTypes = {
  // : PropTypes.string
}

export default NavBar
